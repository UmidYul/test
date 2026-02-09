--
-- PostgreSQL database dump
--

\restrict XdQt6h6HoGf3JfcwT6nnU3bcbs8QM9RjbGLoeqKed9bF5TvfCu24zAxXIx6vsiP

-- Dumped from database version 13.23
-- Dumped by pg_dump version 13.23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: attempt_status; Type: TYPE; Schema: public; Owner: zedlyuz
--

CREATE TYPE public.attempt_status AS ENUM (
    'in_progress',
    'completed',
    'expired',
    'canceled'
);


ALTER TYPE public.attempt_status OWNER TO zedlyuz;

--
-- Name: question_type; Type: TYPE; Schema: public; Owner: zedlyuz
--

CREATE TYPE public.question_type AS ENUM (
    'single_choice',
    'multiple_choice',
    'text'
);


ALTER TYPE public.question_type OWNER TO zedlyuz;

--
-- Name: test_status; Type: TYPE; Schema: public; Owner: zedlyuz
--

CREATE TYPE public.test_status AS ENUM (
    'draft',
    'published',
    'archived'
);


ALTER TYPE public.test_status OWNER TO zedlyuz;

--
-- Name: test_target_role; Type: TYPE; Schema: public; Owner: zedlyuz
--

CREATE TYPE public.test_target_role AS ENUM (
    'teacher',
    'student'
);


ALTER TYPE public.test_target_role OWNER TO zedlyuz;

--
-- Name: user_role; Type: TYPE; Schema: public; Owner: zedlyuz
--

CREATE TYPE public.user_role AS ENUM (
    'admin',
    'teacher',
    'student'
);


ALTER TYPE public.user_role OWNER TO zedlyuz;

--
-- Name: user_status; Type: TYPE; Schema: public; Owner: zedlyuz
--

CREATE TYPE public.user_status AS ENUM (
    'active',
    'blocked',
    'deleted'
);


ALTER TYPE public.user_status OWNER TO zedlyuz;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: attempt_answer_options; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.attempt_answer_options (
    attempt_answer_id uuid NOT NULL,
    option_id uuid NOT NULL
);


ALTER TABLE public.attempt_answer_options OWNER TO zedlyuz;

--
-- Name: attempt_answers; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.attempt_answers (
    id uuid NOT NULL,
    attempt_id uuid NOT NULL,
    question_id uuid NOT NULL,
    free_text character varying,
    is_correct boolean,
    points_awarded integer,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    CONSTRAINT attempt_answers_points_awarded_chk CHECK (((points_awarded IS NULL) OR (points_awarded >= 0)))
);


ALTER TABLE public.attempt_answers OWNER TO zedlyuz;

--
-- Name: class_students; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.class_students (
    class_id uuid NOT NULL,
    student_id uuid NOT NULL,
    enrolled_at timestamp without time zone DEFAULT now() NOT NULL,
    left_at timestamp without time zone,
    CONSTRAINT class_students_dates_chk CHECK (((left_at IS NULL) OR (left_at >= enrolled_at)))
);


ALTER TABLE public.class_students OWNER TO zedlyuz;

--
-- Name: classes; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.classes (
    id uuid NOT NULL,
    grade character varying NOT NULL,
    section character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.classes OWNER TO zedlyuz;

--
-- Name: homeroom_assignments; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.homeroom_assignments (
    id uuid NOT NULL,
    teacher_id uuid NOT NULL,
    class_id uuid NOT NULL,
    start_at timestamp without time zone DEFAULT now() NOT NULL,
    end_at timestamp without time zone,
    CONSTRAINT homeroom_dates_chk CHECK (((end_at IS NULL) OR (end_at >= start_at)))
);


ALTER TABLE public.homeroom_assignments OWNER TO zedlyuz;

--
-- Name: modules; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.modules (
    id uuid NOT NULL,
    subject_id uuid NOT NULL,
    name text NOT NULL,
    description text,
    created_by uuid,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.modules OWNER TO zedlyuz;

--
-- Name: question_options; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.question_options (
    id uuid NOT NULL,
    question_id uuid NOT NULL,
    text character varying NOT NULL,
    is_correct boolean DEFAULT false NOT NULL,
    order_no integer NOT NULL,
    CONSTRAINT question_options_order_chk CHECK ((order_no > 0))
);


ALTER TABLE public.question_options OWNER TO zedlyuz;

--
-- Name: refresh_tokens; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.refresh_tokens (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    token text NOT NULL,
    expires_at timestamp without time zone NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    revoked_at timestamp without time zone,
    last_used_at timestamp without time zone,
    ip_address character varying(45),
    user_agent text
);


ALTER TABLE public.refresh_tokens OWNER TO zedlyuz;

--
-- Name: TABLE refresh_tokens; Type: COMMENT; Schema: public; Owner: zedlyuz
--

COMMENT ON TABLE public.refresh_tokens IS 'Stores refresh tokens for JWT authentication. Allows users to get new access tokens without re-entering credentials.';


--
-- Name: subjects; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.subjects (
    id uuid NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.subjects OWNER TO zedlyuz;

--
-- Name: teacher_teaching_assignments; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.teacher_teaching_assignments (
    teacher_id uuid NOT NULL,
    class_id uuid,
    subject_id uuid NOT NULL,
    is_active boolean DEFAULT true NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    id uuid NOT NULL
);


ALTER TABLE public.teacher_teaching_assignments OWNER TO zedlyuz;

--
-- Name: teacher_test_results; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.teacher_test_results (
    id uuid NOT NULL,
    test_id uuid NOT NULL,
    teacher_id uuid NOT NULL,
    answers jsonb DEFAULT '[]'::jsonb NOT NULL,
    score integer DEFAULT 0,
    passed boolean DEFAULT false,
    completed_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.teacher_test_results OWNER TO zedlyuz;

--
-- Name: teacher_tests; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.teacher_tests (
    id uuid NOT NULL,
    title text NOT NULL,
    description text DEFAULT ''::text,
    duration integer DEFAULT 30,
    passing_score integer DEFAULT 70,
    questions jsonb DEFAULT '[]'::jsonb NOT NULL,
    assigned_to jsonb DEFAULT '[]'::jsonb,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.teacher_tests OWNER TO zedlyuz;

--
-- Name: test_answers; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.test_answers (
    id uuid NOT NULL,
    session_id uuid NOT NULL,
    question_id uuid NOT NULL,
    selected_option_id uuid,
    is_correct boolean DEFAULT false
);


ALTER TABLE public.test_answers OWNER TO zedlyuz;

--
-- Name: test_attempts; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.test_attempts (
    id uuid NOT NULL,
    test_id uuid NOT NULL,
    user_id uuid NOT NULL,
    attempt_no integer DEFAULT 1 NOT NULL,
    started_at timestamp without time zone,
    completed_at timestamp without time zone,
    status public.attempt_status DEFAULT 'in_progress'::public.attempt_status NOT NULL,
    score numeric,
    percent integer,
    passed boolean,
    time_spent_seconds integer,
    CONSTRAINT test_attempts_attempt_no_chk CHECK ((attempt_no > 0)),
    CONSTRAINT test_attempts_completed_chk CHECK (((completed_at IS NULL) OR (started_at IS NULL) OR (completed_at >= started_at))),
    CONSTRAINT test_attempts_percent_chk CHECK (((percent IS NULL) OR ((percent >= 0) AND (percent <= 100)))),
    CONSTRAINT test_attempts_time_spent_chk CHECK (((time_spent_seconds IS NULL) OR (time_spent_seconds >= 0)))
);


ALTER TABLE public.test_attempts OWNER TO zedlyuz;

--
-- Name: test_questions; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.test_questions (
    id uuid NOT NULL,
    test_id uuid NOT NULL,
    question_type public.question_type NOT NULL,
    text character varying NOT NULL,
    points integer DEFAULT 1 NOT NULL,
    order_no integer NOT NULL,
    CONSTRAINT test_questions_order_chk CHECK ((order_no > 0)),
    CONSTRAINT test_questions_points_chk CHECK ((points > 0))
);


ALTER TABLE public.test_questions OWNER TO zedlyuz;

--
-- Name: test_results; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.test_results (
    id uuid NOT NULL,
    user_id uuid NOT NULL,
    test_id uuid NOT NULL,
    score integer DEFAULT 0,
    passed boolean DEFAULT false,
    correct_count integer,
    total_count integer,
    completed_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.test_results OWNER TO zedlyuz;

--
-- Name: tests; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.tests (
    id uuid NOT NULL,
    title character varying NOT NULL,
    duration_minutes integer NOT NULL,
    pass_percent integer NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    created_by uuid NOT NULL,
    target_role public.test_target_role NOT NULL,
    status public.test_status DEFAULT 'draft'::public.test_status NOT NULL,
    attempt_limit integer,
    module_id uuid,
    CONSTRAINT tests_attempt_limit_chk CHECK (((attempt_limit IS NULL) OR (attempt_limit > 0))),
    CONSTRAINT tests_duration_chk CHECK ((duration_minutes > 0)),
    CONSTRAINT tests_pass_percent_chk CHECK (((pass_percent >= 0) AND (pass_percent <= 100)))
);


ALTER TABLE public.tests OWNER TO zedlyuz;

--
-- Name: users; Type: TABLE; Schema: public; Owner: zedlyuz
--

CREATE TABLE public.users (
    id uuid NOT NULL,
    role public.user_role NOT NULL,
    username character varying NOT NULL,
    password_hash character varying NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    email character varying,
    phone character varying,
    status public.user_status DEFAULT 'active'::public.user_status NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    updated_at timestamp without time zone DEFAULT now() NOT NULL,
    password_reset_required boolean DEFAULT false,
    password_reset_at timestamp without time zone,
    password_reset_by_admin_id uuid,
    otp text,
    otp_expires_at timestamp with time zone
);


ALTER TABLE public.users OWNER TO zedlyuz;

--
-- Name: attempt_answer_options attempt_answer_options_unique; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.attempt_answer_options
    ADD CONSTRAINT attempt_answer_options_unique UNIQUE (attempt_answer_id, option_id);


--
-- Name: attempt_answers attempt_answers_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.attempt_answers
    ADD CONSTRAINT attempt_answers_pkey PRIMARY KEY (id);


--
-- Name: attempt_answers attempt_answers_unique; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.attempt_answers
    ADD CONSTRAINT attempt_answers_unique UNIQUE (attempt_id, question_id);


--
-- Name: class_students class_students_unique; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.class_students
    ADD CONSTRAINT class_students_unique UNIQUE (class_id, student_id);


--
-- Name: classes classes_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.classes
    ADD CONSTRAINT classes_pkey PRIMARY KEY (id);


--
-- Name: homeroom_assignments homeroom_assignments_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.homeroom_assignments
    ADD CONSTRAINT homeroom_assignments_pkey PRIMARY KEY (id);


--
-- Name: modules modules_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_pkey PRIMARY KEY (id);


--
-- Name: question_options question_options_order_unique; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.question_options
    ADD CONSTRAINT question_options_order_unique UNIQUE (question_id, order_no);


--
-- Name: question_options question_options_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.question_options
    ADD CONSTRAINT question_options_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id);


--
-- Name: refresh_tokens refresh_tokens_token_key; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_token_key UNIQUE (token);


--
-- Name: subjects subjects_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_pkey PRIMARY KEY (id);


--
-- Name: teacher_test_results teacher_test_results_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.teacher_test_results
    ADD CONSTRAINT teacher_test_results_pkey PRIMARY KEY (id);


--
-- Name: teacher_tests teacher_tests_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.teacher_tests
    ADD CONSTRAINT teacher_tests_pkey PRIMARY KEY (id);


--
-- Name: test_answers test_answers_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_answers
    ADD CONSTRAINT test_answers_pkey PRIMARY KEY (id);


--
-- Name: test_attempts test_attempts_attempt_unique; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_attempts
    ADD CONSTRAINT test_attempts_attempt_unique UNIQUE (test_id, user_id, attempt_no);


--
-- Name: test_attempts test_attempts_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_attempts
    ADD CONSTRAINT test_attempts_pkey PRIMARY KEY (id);


--
-- Name: test_questions test_questions_order_unique; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_questions
    ADD CONSTRAINT test_questions_order_unique UNIQUE (test_id, order_no);


--
-- Name: test_questions test_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_questions
    ADD CONSTRAINT test_questions_pkey PRIMARY KEY (id);


--
-- Name: test_results test_results_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_results
    ADD CONSTRAINT test_results_pkey PRIMARY KEY (id);


--
-- Name: tests tests_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pkey PRIMARY KEY (id);


--
-- Name: teacher_teaching_assignments tta_unique; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.teacher_teaching_assignments
    ADD CONSTRAINT tta_unique UNIQUE (teacher_id, class_id, subject_id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- Name: idx_attempt_answer_options_answer; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_attempt_answer_options_answer ON public.attempt_answer_options USING btree (attempt_answer_id);


--
-- Name: idx_attempt_answer_options_option; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_attempt_answer_options_option ON public.attempt_answer_options USING btree (option_id);


--
-- Name: idx_attempt_answers_attempt; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_attempt_answers_attempt ON public.attempt_answers USING btree (attempt_id);


--
-- Name: idx_attempt_answers_question; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_attempt_answers_question ON public.attempt_answers USING btree (question_id);


--
-- Name: idx_class_students_class; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_class_students_class ON public.class_students USING btree (class_id);


--
-- Name: idx_class_students_student; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_class_students_student ON public.class_students USING btree (student_id);


--
-- Name: idx_classes_grade_section; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_classes_grade_section ON public.classes USING btree (grade, section);


--
-- Name: idx_homeroom_class; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_homeroom_class ON public.homeroom_assignments USING btree (class_id);


--
-- Name: idx_homeroom_class_end; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_homeroom_class_end ON public.homeroom_assignments USING btree (class_id, end_at);


--
-- Name: idx_homeroom_teacher; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_homeroom_teacher ON public.homeroom_assignments USING btree (teacher_id);


--
-- Name: idx_password_reset_required; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_password_reset_required ON public.users USING btree (password_reset_required);


--
-- Name: idx_question_options_question_id; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_question_options_question_id ON public.question_options USING btree (question_id);


--
-- Name: idx_refresh_tokens_expires_at; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_refresh_tokens_expires_at ON public.refresh_tokens USING btree (expires_at);


--
-- Name: idx_refresh_tokens_token; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_refresh_tokens_token ON public.refresh_tokens USING btree (token);


--
-- Name: idx_refresh_tokens_user_id; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_refresh_tokens_user_id ON public.refresh_tokens USING btree (user_id);


--
-- Name: idx_test_attempts_test_completed; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_test_attempts_test_completed ON public.test_attempts USING btree (test_id, completed_at);


--
-- Name: idx_test_attempts_test_user_completed; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_test_attempts_test_user_completed ON public.test_attempts USING btree (test_id, user_id, completed_at);


--
-- Name: idx_test_attempts_user_completed; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_test_attempts_user_completed ON public.test_attempts USING btree (user_id, completed_at);


--
-- Name: idx_test_questions_test_id; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_test_questions_test_id ON public.test_questions USING btree (test_id);


--
-- Name: idx_tests_created_at; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_tests_created_at ON public.tests USING btree (created_at);


--
-- Name: idx_tests_created_by; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_tests_created_by ON public.tests USING btree (created_by);


--
-- Name: idx_tests_status; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_tests_status ON public.tests USING btree (status);


--
-- Name: idx_tests_target_role; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_tests_target_role ON public.tests USING btree (target_role);


--
-- Name: idx_tta_class; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_tta_class ON public.teacher_teaching_assignments USING btree (class_id);


--
-- Name: idx_tta_subject; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_tta_subject ON public.teacher_teaching_assignments USING btree (subject_id);


--
-- Name: idx_tta_teacher; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_tta_teacher ON public.teacher_teaching_assignments USING btree (teacher_id);


--
-- Name: idx_users_otp_expires_at; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_users_otp_expires_at ON public.users USING btree (otp_expires_at);


--
-- Name: idx_users_phone; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_users_phone ON public.users USING btree (phone);


--
-- Name: idx_users_role; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE INDEX idx_users_role ON public.users USING btree (role);


--
-- Name: ux_homeroom_one_active_per_class; Type: INDEX; Schema: public; Owner: zedlyuz
--

CREATE UNIQUE INDEX ux_homeroom_one_active_per_class ON public.homeroom_assignments USING btree (class_id) WHERE (end_at IS NULL);


--
-- Name: attempt_answer_options attempt_answer_options_attempt_answer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.attempt_answer_options
    ADD CONSTRAINT attempt_answer_options_attempt_answer_id_fkey FOREIGN KEY (attempt_answer_id) REFERENCES public.attempt_answers(id) ON DELETE CASCADE;


--
-- Name: attempt_answer_options attempt_answer_options_option_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.attempt_answer_options
    ADD CONSTRAINT attempt_answer_options_option_id_fkey FOREIGN KEY (option_id) REFERENCES public.question_options(id) ON DELETE CASCADE;


--
-- Name: attempt_answers attempt_answers_attempt_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.attempt_answers
    ADD CONSTRAINT attempt_answers_attempt_id_fkey FOREIGN KEY (attempt_id) REFERENCES public.test_attempts(id) ON DELETE CASCADE;


--
-- Name: attempt_answers attempt_answers_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.attempt_answers
    ADD CONSTRAINT attempt_answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.test_questions(id) ON DELETE CASCADE;


--
-- Name: class_students class_students_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.class_students
    ADD CONSTRAINT class_students_class_id_fkey FOREIGN KEY (class_id) REFERENCES public.classes(id) ON DELETE CASCADE;


--
-- Name: class_students class_students_student_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.class_students
    ADD CONSTRAINT class_students_student_id_fkey FOREIGN KEY (student_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: users fk_password_reset_admin; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT fk_password_reset_admin FOREIGN KEY (password_reset_by_admin_id) REFERENCES public.users(id) ON DELETE SET NULL;


--
-- Name: homeroom_assignments homeroom_assignments_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.homeroom_assignments
    ADD CONSTRAINT homeroom_assignments_class_id_fkey FOREIGN KEY (class_id) REFERENCES public.classes(id) ON DELETE CASCADE;


--
-- Name: homeroom_assignments homeroom_assignments_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.homeroom_assignments
    ADD CONSTRAINT homeroom_assignments_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: modules modules_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id);


--
-- Name: modules modules_subject_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_subject_id_fkey FOREIGN KEY (subject_id) REFERENCES public.subjects(id) ON DELETE CASCADE;


--
-- Name: question_options question_options_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.question_options
    ADD CONSTRAINT question_options_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.test_questions(id) ON DELETE CASCADE;


--
-- Name: refresh_tokens refresh_tokens_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.refresh_tokens
    ADD CONSTRAINT refresh_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: teacher_teaching_assignments teacher_teaching_assignments_class_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.teacher_teaching_assignments
    ADD CONSTRAINT teacher_teaching_assignments_class_id_fkey FOREIGN KEY (class_id) REFERENCES public.classes(id) ON DELETE CASCADE;


--
-- Name: teacher_teaching_assignments teacher_teaching_assignments_subject_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.teacher_teaching_assignments
    ADD CONSTRAINT teacher_teaching_assignments_subject_id_fkey FOREIGN KEY (subject_id) REFERENCES public.subjects(id) ON DELETE CASCADE;


--
-- Name: teacher_teaching_assignments teacher_teaching_assignments_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.teacher_teaching_assignments
    ADD CONSTRAINT teacher_teaching_assignments_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: teacher_test_results teacher_test_results_teacher_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.teacher_test_results
    ADD CONSTRAINT teacher_test_results_teacher_id_fkey FOREIGN KEY (teacher_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: teacher_test_results teacher_test_results_test_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.teacher_test_results
    ADD CONSTRAINT teacher_test_results_test_id_fkey FOREIGN KEY (test_id) REFERENCES public.teacher_tests(id) ON DELETE CASCADE;


--
-- Name: test_answers test_answers_question_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_answers
    ADD CONSTRAINT test_answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES public.test_questions(id) ON DELETE CASCADE;


--
-- Name: test_answers test_answers_selected_option_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_answers
    ADD CONSTRAINT test_answers_selected_option_id_fkey FOREIGN KEY (selected_option_id) REFERENCES public.question_options(id);


--
-- Name: test_answers test_answers_session_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_answers
    ADD CONSTRAINT test_answers_session_id_fkey FOREIGN KEY (session_id) REFERENCES public.test_attempts(id) ON DELETE CASCADE;


--
-- Name: test_attempts test_attempts_test_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_attempts
    ADD CONSTRAINT test_attempts_test_id_fkey FOREIGN KEY (test_id) REFERENCES public.tests(id) ON DELETE CASCADE;


--
-- Name: test_attempts test_attempts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_attempts
    ADD CONSTRAINT test_attempts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: test_questions test_questions_test_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_questions
    ADD CONSTRAINT test_questions_test_id_fkey FOREIGN KEY (test_id) REFERENCES public.tests(id) ON DELETE CASCADE;


--
-- Name: test_results test_results_test_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_results
    ADD CONSTRAINT test_results_test_id_fkey FOREIGN KEY (test_id) REFERENCES public.tests(id) ON DELETE CASCADE;


--
-- Name: test_results test_results_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.test_results
    ADD CONSTRAINT test_results_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: tests tests_created_by_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON DELETE RESTRICT;


--
-- Name: tests tests_module_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: zedlyuz
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_module_id_fkey FOREIGN KEY (module_id) REFERENCES public.modules(id) ON DELETE SET NULL;


--
-- Name: TABLE attempt_answer_options; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.attempt_answer_options TO zedlyuz_umid;
GRANT ALL ON TABLE public.attempt_answer_options TO "zedlyuz_DB";


--
-- Name: TABLE attempt_answers; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.attempt_answers TO zedlyuz_umid;
GRANT ALL ON TABLE public.attempt_answers TO "zedlyuz_DB";


--
-- Name: TABLE class_students; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.class_students TO zedlyuz_umid;
GRANT ALL ON TABLE public.class_students TO "zedlyuz_DB";


--
-- Name: TABLE classes; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.classes TO zedlyuz_umid;
GRANT ALL ON TABLE public.classes TO "zedlyuz_DB";


--
-- Name: TABLE homeroom_assignments; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.homeroom_assignments TO zedlyuz_umid WITH GRANT OPTION;
GRANT ALL ON TABLE public.homeroom_assignments TO "zedlyuz_DB" WITH GRANT OPTION;


--
-- Name: TABLE modules; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.modules TO higherwa_admin;
GRANT ALL ON TABLE public.modules TO higherwa_db;
GRANT ALL ON TABLE public.modules TO zedlyuz_umid;
GRANT ALL ON TABLE public.modules TO "zedlyuz_DB";


--
-- Name: TABLE question_options; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.question_options TO zedlyuz_umid;
GRANT ALL ON TABLE public.question_options TO "zedlyuz_DB";


--
-- Name: TABLE refresh_tokens; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.refresh_tokens TO zedlyuz_umid WITH GRANT OPTION;
GRANT ALL ON TABLE public.refresh_tokens TO "zedlyuz_DB" WITH GRANT OPTION;


--
-- Name: TABLE subjects; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.subjects TO zedlyuz_umid;
GRANT ALL ON TABLE public.subjects TO "zedlyuz_DB";


--
-- Name: TABLE teacher_teaching_assignments; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.teacher_teaching_assignments TO zedlyuz_umid;
GRANT ALL ON TABLE public.teacher_teaching_assignments TO "zedlyuz_DB";


--
-- Name: TABLE teacher_test_results; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.teacher_test_results TO higherwa_admin;
GRANT ALL ON TABLE public.teacher_test_results TO higherwa_db;
GRANT ALL ON TABLE public.teacher_test_results TO zedlyuz_umid;
GRANT ALL ON TABLE public.teacher_test_results TO "zedlyuz_DB";


--
-- Name: TABLE teacher_tests; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.teacher_tests TO zedlyuz_umid;
GRANT ALL ON TABLE public.teacher_tests TO "zedlyuz_DB";


--
-- Name: TABLE test_answers; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.test_answers TO higherwa_admin;
GRANT ALL ON TABLE public.test_answers TO higherwa_db;
GRANT ALL ON TABLE public.test_answers TO zedlyuz_umid;
GRANT ALL ON TABLE public.test_answers TO "zedlyuz_DB";


--
-- Name: TABLE test_attempts; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.test_attempts TO zedlyuz_umid;
GRANT ALL ON TABLE public.test_attempts TO "zedlyuz_DB";


--
-- Name: TABLE test_questions; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.test_questions TO zedlyuz_umid;
GRANT ALL ON TABLE public.test_questions TO "zedlyuz_DB";


--
-- Name: TABLE test_results; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.test_results TO zedlyuz_umid;
GRANT ALL ON TABLE public.test_results TO "zedlyuz_DB";


--
-- Name: TABLE tests; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.tests TO zedlyuz_umid;
GRANT ALL ON TABLE public.tests TO "zedlyuz_DB";


--
-- Name: TABLE users; Type: ACL; Schema: public; Owner: zedlyuz
--

GRANT ALL ON TABLE public.users TO zedlyuz_umid;
GRANT ALL ON TABLE public.users TO "zedlyuz_DB";


--
-- PostgreSQL database dump complete
--

\unrestrict XdQt6h6HoGf3JfcwT6nnU3bcbs8QM9RjbGLoeqKed9bF5TvfCu24zAxXIx6vsiP

