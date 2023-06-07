import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { searchFilterChange, statusFilterChange,priorityFilterChange } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [searchKey, setSearchKey] = useState();
  const [statusfilter, setStatusfilter] = useState('All');
  const [priorityfilter, setPriorityfilter] = useState([]);



  const handleSearchKeyChange = (e) =>{
    setSearchKey(e.target.value)
    dispatch(searchFilterChange(e.target.value))

  }

  const handeStatusChange = (e) =>{
    setStatusfilter(e.target.value)
    dispatch(statusFilterChange(e.target.value))
   
  }
  const handePriorityChange = (value) =>{
    setPriorityfilter(value)
    dispatch(priorityFilterChange(value))
   
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchKey} onChange={handleSearchKeyChange}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={statusfilter} onChange={handeStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={priorityfilter}
          onChange={handePriorityChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}