import { useEffect, useLayoutEffect } from 'react';
import { Grid, Button, Balloon } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const Node = () => {
  const headerBtn = null;

  const switchSourceBtn = (source) => (
    <Button text type="primary" className={styles.switchVersionBtn}>
      切换版本
    </Button>
  );

  const sourceList = [
    {
      name: 'Npm',
    },
    {
      name: 'Yarn',
    },
    {
      name: 'Cnpm',
    },
    {
      name: 'Pnpm',
    },
  ];
  return (
    <div className={styles.nodeContainer}>
      <PageHeader title="包数据源管理" button={headerBtn} />
      {sourceList.map((ele) => (
        <Row className={styles.row}>
          <Col span={12}>
            <div className={styles.subTitle}>{ele.name}源</div>
          </Col>
          <Col span={12} className={styles.col}>
            {'Not Found'}
            <>{switchSourceBtn(ele.name)}</>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Node;
