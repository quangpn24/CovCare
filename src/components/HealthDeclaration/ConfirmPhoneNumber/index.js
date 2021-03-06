import { Button, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { numberValidator } from 'utils/validator';
import styles from './index.module.less';

const ConfirmPhoneNumber = props => {
  const [sendOTP, setSendOTP] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = () => {
    setSendOTP(true);
    const { otp } = form.getFieldsValue();
    if (otp === '123456') {
      props.setIsConfirm(true);
    } else if (otp) {
      message.error('Mã xác thực không chính xác.');
    }
  };

  const resendOTP = () => {
    message.info('Mã xác thực đã được gửi lại');
  };

  return (
    <div className={styles['container-confirm']}>
      <Form onFinish={handleSubmit} form={form}>
        <div className={styles['title-confirm']}>Nhập số điện thoại để xác thực</div>
        <Form.Item
          className={styles.item}
          rules={[
            { required: true, message: 'Bạn chưa nhập số điện thoại' },
            { validator: numberValidator },
          ]}
          name="phoneNumber">
          <Input
            placeholder="Nhập số điện thoại"
            className={styles['input-confirm']}
            disabled={sendOTP}
          />
        </Form.Item>
        {sendOTP && <div className={styles['title-confirm']}>Mã xác thực OTP</div>}
        {sendOTP && (
          <Form.Item
            className={styles.item}
            rules={[{ required: true, message: 'Bạn chưa nhập mã xác thực' }]}
            name="otp">
            <Input placeholder="Nhập mã xác thực" className={styles['input-confirm']} />
          </Form.Item>
        )}
        <Form.Item style={{ textAlign: 'center' }}>
          <Button block size="large" type="primary" htmlType="submit">
            {!sendOTP ? 'Nhận mã OTP' : 'Tiếp tục'}
          </Button>
        </Form.Item>
        {sendOTP && (
          <Button block size="large" type="default" className={styles.resend} onClick={resendOTP}>
            Gửi lại mã
          </Button>
        )}
      </Form>
    </div>
  );
};

export default ConfirmPhoneNumber;
