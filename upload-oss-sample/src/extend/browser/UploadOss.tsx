import * as React from 'react';
import { Button, message } from 'sumi-browser';
import { InboxOutlined } from '@ant-design/icons';
import ConfigProvider from 'antd/lib/config-provider';
import '@opensumi/antd-theme/lib/index.css';
import OSS = require('ali-oss');

import Form from 'antd/lib/form';
import 'antd/lib/form/style/index.css';
import Input from 'antd/lib/input';
import 'antd/lib/input/style/index.css';
import Avatar from 'antd/lib/avatar';
import 'antd/lib/avatar/style/index.css';
import Upload, { UploadChangeParam } from 'antd/lib/upload';
import 'antd/lib/upload/style/index.css';
import 'antd/lib/icon/style/index.css';

import { INodeService } from '../common/service';
import './style.less';

const { Dragger } = Upload;

export const UploadOss: React.FC<IComponentProps<INodeService>> = () => {
  const [initialized, setInitialized] = React.useState(false);
  const ossClient = React.useRef<OSS>(null);
  const fileList = React.useRef<File[]>([]);
  const handleFileUploaderChange = React.useCallback(
    (info: UploadChangeParam) => {
      fileList.current = info.fileList.map((f) => f.originFileObj as unknown as File);
    },
    []
  );

  const onFinish = React.useCallback((values) => {
    const client = new OSS(values);
    ossClient.current = client;
    setInitialized(true);
  }, []);

  const doUpload = React.useCallback(async (file: File) => {
    try {
      // 这里应该可以使用 file.stream() 获取 stream，并通过 ossClient.putStream 上传
      // 但在编写这个示例时，调用该 API 会抛一个 Cannot read property 'x-oss-request-id' of undefined 的错误
      await ossClient.current.put(file.name, file);
      message.success(`文件 ${file.name} 上传成功！`);
    } catch (err) {
      console.log('er', err);
    }
  }, [ossClient]);

  const handleUpload = React.useCallback(async () => {
    if (!ossClient.current || !initialized) {
      message.error('请先初始化 OSS');
      return;
    }

    if (fileList.current.length === 0) {
      message.error('请先选择文件');
      return;
    }

    await Promise.all(fileList.current.map(doUpload));
    message.success(`${fileList.current.length} 个文件上传完成.`);

    fileList.current = [];
  }, [fileList, initialized, ossClient]);

  return (
    <ConfigProvider prefixCls="sumi_antd">
      <div className="sumi-extension-example-container">
        {!initialized && (
          <div className="oss_config">
            <Form
              name="basic"
              onFinish={onFinish}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              layout="horizontal"
            >
              <Form.Item
                label="Region"
                name="region"
                rules={[
                  { required: true, message: 'Please input your Region!' },
                ]}
              >
                <Input placeholder="请输入 Region" />
              </Form.Item>
              <Form.Item
                label="AccessKeyId"
                name="accessKeyId"
                rules={[
                  { required: true, message: 'Please input your AccessKeyId!' },
                ]}
              >
                <Input placeholder="请输入 AccessKeyId" />
              </Form.Item>
              <Form.Item
                label="AccessKeySecret"
                name="accessKeySecret"
                rules={[
                  {
                    required: true,
                    message: 'Please input your AccessKeySecret!',
                  },
                ]}
              >
                <Input placeholder="请输入 AccessKeySecret" />
              </Form.Item>
              <Form.Item
                label="Bucket"
                name="bucket"
                rules={[
                  { required: true, message: 'Please input your Bucket!' },
                ]}
              >
                <Input placeholder="请输入 Bucket" />
              </Form.Item>
              <Form.Item
                label="Endpoint"
                name="endpoint"
                rules={[
                  { required: true, message: 'Please input your Endpoint!' },
                ]}
              >
                <Input placeholder="请输入 Endpoint" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  初始化 OSS
                </Button>
              </Form.Item>
            </Form>
          </div>
        )}
        <div className={'sample-upload-box'}>
          <Dragger onChange={handleFileUploaderChange} multiple>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或拖拽文件到此区域上传</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </Dragger>
        </div>
        <Button onClick={handleUpload}>上传</Button>
        <div className="theme-contributors">
          <p>
            <h4>Theme:</h4>
            <a
              href="https://www.npmjs.com/package/@opensumi/antd-theme"
              target="blank"
            >
              @opensumi/antd-theme
            </a>
          </p>
          <div>
            <h4>Contributor:</h4>
            <p>
              <Avatar src="https://img.alicdn.com/imgextra/i4/O1CN01rHnatT1mX6VYmQ4PL_!!6000000004963-2-tps-220-220.png" style={{marginRight: 5}}/>
              XIAO MING
            </p>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};
