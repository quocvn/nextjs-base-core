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

export default function Home() {
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
    <main className='flex min-h-screen'>
      <div className='z-10 w-full px-24 pt-16 font-mono'>
        <Title className='text-4xl text-center text-linen'>
          Next.js (Typescript) + Ant Design + Tailwind CSS + Redux Toolkit
        </Title>
        <p className='fixed top-0 left-0 flex justify-center w-full pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Get started by editing&nbsp;
          <code className='font-mono font-bold'>src/pages/index.tsx</code>
        </p>
        <div className='my-5'>
          <Space>
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
              className='font-bold text-white bg-teal-600 border-teal-600 rounded-none '
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
                A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it
                can be found as a welcome guest in many households across the world.
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
    </main>
  )
}
