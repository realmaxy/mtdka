const fioRegex =
  /^[А-ЯЁ][а-яё]+(-[А-ЯЁ][а-яё]+)?\s[А-ЯЁ][а-яё]+\s[А-ЯЁ][а-яё]+$/;

const numberRegex = /^[78]\d{10}$/;

type formErrors = {
  fio?: string;
  number?: string;
};

export function validateForm(
  fio: string | undefined,
  number: string | undefined
) {
  const errors: formErrors = {};

  if (!fio) {
    errors.fio = "Введите ФИО";
  } else if (!fioRegex.test(fio)) {
    errors.fio = "Введен некорректный ФИО";
  }
  if (!number) {
    errors.number = "Введите номер";
  } else if (!numberRegex.test(number)) {
    errors.number = "Введен некорректный номер";
  }

  return errors;
}
