import styled from 'styled-components'

const TypographyStyles = styled.div`
font-family: 'Rubik', sans-serif;
text-decoration: none;

&.h1 {
  font-size: 36px;
  line-height: 40px;
  font-weight: bold;
}

&.h2 {
  font-size: 32px;
  line-height: 36px;
  font-weight: bold;
}

&.h3 {
  font-size: 24px;
  line-height: 26px;
  font-weight: bold;
}

&.h4 {
  font-size: 20px;
  line-height: 26px;
  font-weight: bold;
}

&.h5 {
  font-size: 18px;
  line-height: 28px;
  font-weight: bold;
}

&.body-lg {
  font-size: 18px;
  line-height: 28px;
  font-weight: 400;
}

&.body-sm {
  font-size: 16px;
  line-height: 150%;
  font-weight: 400;
}

&.body-micro {
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
}

&.utility-lg {
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
}

&.utility-sm {
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
}
`

export { TypographyStyles }
