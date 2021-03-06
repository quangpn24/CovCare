import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import Result from 'components/Result';
import React, { useState } from 'react';
import styles from './index.module.less';
const { Option } = Select;

const Certificate = props => {
  const [form] = Form.useForm();
  const dateFormat = 'DD/MM/YYYY';
  const handleSubmit = () => {
    setVisible('block');
  };
  const handleReset = () => {
    form.resetFields();
    setVisible('none');
  };
  const [visible, setVisible] = useState('none');

  return (
    <div className="container">
      <div className="banner-sm" style={{ marginTop: '60px' }}>
        <Row gutter={[20, 10]}>
          <Col xs={24} md={14} lg={12} xl={8}>
            <h1 className="title">Tra cứu giấy chứng nhận</h1>
            <p>Giấy chứng sẽ giúp bạn có thể lưu thông và đi làm trở lại.</p>
          </Col>
        </Row>
      </div>

      <div className={styles.contain}>
        <Card className={styles.card}>
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Row gutter={[20, 10]} justify="center">
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Form.Item
                  label="Họ và tên"
                  name="displayName"
                  rules={[{ required: true, message: 'Họ và tên không được để trống' }]}>
                  <Input size="middle" placeholder="Họ và tên" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Form.Item
                  label="Ngày sinh"
                  name="dob"
                  rules={[{ required: true, message: 'Vui lòng nhập ngày sinh' }]}>
                  <DatePicker
                    style={{ width: '100%' }}
                    placeholder="Ngày/Tháng/Năm"
                    format={dateFormat}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Form.Item
                  label="Giới tính"
                  name="gender"
                  rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}>
                  <Select placeholder="Giới tính">
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                    <Option value="others">Khác</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Form.Item
                  label="Số điện thoại"
                  name="phoneNumber"
                  onKeyPress={event => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  rules={[
                    { required: true, message: 'Vui lòng nhập số điện thoại' },
                    { min: 10, message: 'Vui lòng nhập số điện thoại đúng định dạng' },
                  ]}>
                  <Input type="text" placeholder="Số điện thoại" maxLength="10" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Form.Item
                  label="Số CMND/CCCD/HC"
                  name="idNumber"
                  onKeyPress={event => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}>
                  <Input type="text" placeholder="Số CMND/CCCD/HC" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Form.Item label="Số thẻ BHYT" name="bhyt">
                  <Input type="text" placeholder="Số thẻ BHYT" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <div className={styles.notice}>
                  <span style={{ fontWeight: '600' }}>Ghi chú: </span>
                  <span>
                    Nếu bạn đã tiêm nhưng chưa được ghi nhận, hãy liên hệ với cơ sở tiêm và đề nghị
                    cập nhật thông tin lên Nền tảng tiêm chủng để có thể nhận được Chứng nhận tiêm
                    hoặc phản ánh thông tin mũi tiêm{' '}
                  </span>
                  <a href="./" style={{ textDecoration: 'underline' }}>
                    tại đây
                  </a>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} lg={6}>
                <Button
                  className={styles.btn}
                  onClick={handleReset}
                  block
                  size="large"
                  type="primary"
                  ghost
                  icon={<SyncOutlined />}>
                  Nhập lại
                </Button>
              </Col>
              <Col sm={12} xs={12} md={6} lg={6}>
                <Button
                  className={styles.btn}
                  block
                  size="large"
                  type="primary"
                  htmlType="submit"
                  icon={<SearchOutlined />}>
                  Tra cứu
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
        <Result visible={visible}></Result>
      </div>
    </div>
  );
};

export default Certificate;
