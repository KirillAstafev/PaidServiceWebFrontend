import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function MedClinicText() {
    return (
        <Container
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: {xs: 4, sm: 8},
                py: {xs: 8, sm: 10},
                textAlign: {sm: 'center', md: 'left'},
            }}>
            <Typography variant={'h6'} textAlign="center">
                Наша команда высококлассных врачей-специалистов, имеющих большой стаж работы с пациентами разных возрастов,
                предложит каждому члену семьи индивидуальный и комплексный план лечения и профилактики.
                Приоритетом нашей работы является именно профилактика стоматологических заболеваний,
                поддержание стоматологического здоровья как детей, так и взрослых.
                Мы поможем Вам с выбором средств по уходу за полостью рта,
                индивидуально обучим навыкам гигиены полости рта и отработаем технику чистки зубов.
            </Typography>
        </Container>
    )
}