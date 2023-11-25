import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <header>
        <h1>Đặt Lịch Khám Bệnh</h1>
      </header>

      <section>
        <h2>Dịch Vụ Cung Cấp</h2>
        <p>Chúng tôi cung cấp các dịch vụ khám bệnh chất lượng cao.</p>
      </section>

      <section>
        <h2>Lịch Hẹn</h2>
        <p>Chọn ngày và giờ hẹn để đặt lịch khám bệnh của bạn.</p>
        <Link to="/appointment">
          <button>Đặt Lịch Ngay</button>
        </Link>
      </section>
    </div>
  );
};

