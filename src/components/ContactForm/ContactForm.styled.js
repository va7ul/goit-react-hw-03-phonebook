import { styled } from 'styled-components';
import { Form } from 'formik';

export const CardForm = styled(Form)`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  padding-left: 5px;
  border: 1px solid;
`;

export const Button = styled.button`
  width: 100px;
  margin-top: 10px;
  margin-left: auto;
  margin-bottom: 20px;
  margin-right: auto;
`;
