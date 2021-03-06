import { EditOutlined, InfoCircleFilled, SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Table, Tag, Tooltip } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less';

const RegistrationResult = props => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState('none');
  const handleSubmit = () => {
    const { idNumber, phoneNumber } = form.getFieldsValue();
    if (idNumber === undefined || phoneNumber === undefined) {
      return;
    }
    setVisible('block');
  };
  const handleReset = () => {
    form.resetFields();
    setVisible('none');
  };
  const columns = [
    {
      title: 'STT',
      dataIndex: 'no',
      key: 'no',
      align: 'center',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'dob',
      key: 'dob',
      align: 'center',
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      align: 'center',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      align: 'center',
    },
    {
      title: 'Số CMND/CCCD/HC',
      dataIndex: 'idNumber',
      key: 'idNumber',
      align: 'center',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      render: status => <Tag color="blue">{status}</Tag>,
    },
    {
      title: 'Thao tác',
      dataIndex: 'action',
      align: 'center',
      width: '10%',
      render: no => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Tooltip title="Chỉnh sửa">
              <Button
                style={{ padding: '0' }}
                href="/register"
                type="primary"
                icon={<EditOutlined />}></Button>
            </Tooltip>
            <Tooltip title="Xem chi tiết">
              <Button
                style={{ padding: '0' }}
                href="/register"
                type="link"
                icon={<InfoCircleFilled />}></Button>
            </Tooltip>
          </div>
        );
      },
    },
  ];
  const dataSource = [
    {
      key: '1',
      no: '1',
      gender: 'Nam',
      name: 'Đỗ Văn Bảo',
      dob: '10/01/2001',
      phoneNumber: '0866073147',
      idNumber: '241819911',
      status: 'Đăng ký nhanh',
    },
    {
      key: '2',
      no: '2',
      gender: 'Nam',
      name: 'Đỗ Văn Bảo',
      dob: '10/01/2001',
      phoneNumber: '0866073147',
      idNumber: '241819911',
      status: 'Đăng ký nhanh',
    },
  ];
  return (
    <div className="container">
      <div className="banner-sm" style={{ marginTop: '60px' }}>
        <Row gutter={[20, 10]}>
          <Col xs={24} md={14} lg={12} xl={10}>
            <h1 className="title">Tra cứu kết quả đăng ký tiêm</h1>
            <p>Đăng ký của bạn sẽ được ghi nhận và thông báo tới bạn sớm nhất có thể.</p>
          </Col>
        </Row>
      </div>

      <div className={styles.contain}>
        <Card className={styles.card}>
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Row gutter={[20, 10]} justify="center">
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  onKeyPress={event => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  label="Số CMND/CCCD/Hộ chiếu"
                  name="idNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Số CMND/CCCD/Hộ Chiếu không được bỏ trống',
                    },
                  ]}>
                  <Input size="middle" placeholder="Số CMND/CCCD/Hộ chiếu" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  onKeyPress={event => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  label="Số điện thoại"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Số điện thoại không được bỏ trống',
                    },
                    { min: 10, message: 'Vui lòng nhập số điện thoại đúng định dạng' },
                  ]}>
                  <Input size="middle" placeholder="Số điện thoại không được bỏ trống" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <div className={styles.notice}>
                  <span>
                    Lưu ý: Nếu bạn dưới 18 tuổi, vui lòng nhập số điện thoại của người giám hộ để
                    tra cứu
                  </span>
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
        <div className={styles.result} style={{ display: visible }}>
          <h3>Kết quả tra cứu ({dataSource.length})</h3>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ x: '1300' }}></Table>
        </div>
      </div>
    </div>
  );
};

export default RegistrationResult;
