\c eightbnb;

CREATE TABLE public.spaces (
  id BIGSERIAL PRIMARY KEY,
  nightly_rate_cents INT NOT NULL,
  cleaning_fee_cents INT NOT NULL,
  service_fee_cents INT NOT NULL,
  tax_rate_cents INT NOT NULL,
  max_adult_guests INT NOT NULL,
  min_stay_nights INT NOT NULL
);

CREATE TABLE public.reservations (
  id BIGSERIAL PRIMARY KEY,
  checkin_date DATE NOT NULL DEFAULT CURRENT_DATE,
  checkout_date DATE NOT NULL DEFAULT CURRENT_DATE,
  space_id INT REFERENCES public.spaces (id)
);