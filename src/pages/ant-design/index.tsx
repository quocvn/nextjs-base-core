/* eslint-disable no-console */
import {
  LoadingOutlined,
  MessageOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from '@ant-design/icons'
import {
  Button,
  Typography,
  Divider,
  Col,
  Row,
  Checkbox,
  Input,
  Breadcrumb,
  Progress,
  Radio,
  Rate,
  Slider,
  notification,
  Space,
  Steps,
  Switch,
  Avatar,
  Badge,
  Card,
  Collapse,
  message,
  Spin,
} from 'antd'
import Link from 'next/link'
import { useState } from 'react'

const { Title } = Typography
const { Panel } = Collapse
const colStyle: React.CSSProperties = {
  background: '#0092ff',
  padding: '8px 0',
  color: 'white',
  textAlign: 'center',
}

const AntExample = () => {
  const [value, setValue] = useState(1)
  const [messageApi, contextHolder] = message.useMessage()
  const plainOptions = ['Apple', 'Pear', 'Orange']

  const onRadioChange = (e: any) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!')
      },
    })
  }

  const messageInfo = () => {
    messageApi.info('Hello, Ant Design!')
  }

  return (
    <div className='container mx-auto px-8 font-mono xl:px-16'>
      <Title className='py-14 text-center text-4xl'>
        Next.js (Typescript) + Ant Design + Tailwind CSS + Redux Toolkit
      </Title>
      <div className='my-5'>
        <Space wrap>
          <Button type='primary' onClick={openNotification}>
            Primary Button
          </Button>
          <Button type='primary' danger onClick={openNotification}>
            Danger
          </Button>
          <Button>Default Button</Button>
          <Button type='dashed'>Dashed Button</Button>
          <Button type='primary' shape='round' icon={<MessageOutlined />} onClick={messageInfo}>
            Show message
          </Button>
          <Button type='text'>Text Button</Button>
          <Button type='link'>Link Button</Button>
          <Button
            type='primary'
            className='rounded-none border-teal-600 bg-teal-600 font-bold text-white '
          >
            Ant button with a tailwind css styles
          </Button>
        </Space>
      </div>
      <div className='my-3'>
        <Radio.Group onChange={onRadioChange} value={value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </Radio.Group>

        <span className='ms-3'>
          <Checkbox.Group options={plainOptions} defaultValue={['Apple']} />
        </span>

        <Switch className='ms-3' defaultChecked />
        <Spin className='ms-3' />
      </div>
      <div className='my-3'>
        <Rate allowHalf defaultValue={2.5} />
        <div className='mt-3'>
          <Space size={16} wrap>
            <Avatar icon={<UserOutlined />} />
            <Avatar>U</Avatar>
            <Avatar size={40}>USER</Avatar>
            <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>U</Avatar>
            <Badge count={1}>
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            </Badge>
          </Space>
        </div>

        <Divider orientation='left'>Horizontal</Divider>
        <Row gutter={16}>
          <Col className='gutter-row' span={6}>
            <div style={colStyle}>col-6</div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div style={colStyle}>col-6</div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div style={colStyle}>col-6</div>
          </Col>
          <Col className='gutter-row' span={6}>
            <div style={colStyle}>col-6</div>
          </Col>
        </Row>
      </div>
      <div>
        <Input placeholder='Basic usage' />
        <Badge.Ribbon text='Hippies' color='purple'>
          <Card className='mt-3' title='Pushes open the window' size='small'>
            and raises the spyglass.
          </Card>
        </Badge.Ribbon>
        <Collapse className='mt-3'>
          <Panel header='This is default size panel header' key='1'>
            <p>
              A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can
              be found as a welcome guest in many households across the world.
            </p>
          </Panel>
        </Collapse>
        <Slider defaultValue={30} />
      </div>
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href='/'>Application Center</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href='/'>Application List</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <Steps
        className='my-3'
        items={[
          {
            title: 'Login',
            status: 'finish',
            icon: <UserOutlined />,
          },
          {
            title: 'Verification',
            status: 'finish',
            icon: <SolutionOutlined />,
          },
          {
            title: 'Pay',
            status: 'process',
            icon: <LoadingOutlined />,
          },
          {
            title: 'Done',
            status: 'wait',
            icon: <SmileOutlined />,
          },
        ]}
      />
      <div className='my-4'>
        <Progress percent={30} />
        <Progress percent={50} status='active' />
        <Progress percent={70} status='exception' />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </div>
      {contextHolder}
    </div>
  )
}

export default AntExample
