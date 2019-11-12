import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd';
import { actionCreators as breadcrumbAction } from '@/redux/modules/breadcrumb'
import { actionCreators } from '@/redux/modules/table';

const mapStateToProps = (state) => {
  return {
    reduxTableData() {
      return state.table.tableData
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBreadcrumb(breadcrumbOption = []) {
      dispatch(breadcrumbAction.setBreadcrumb(breadcrumbOption))
    },
    setTableData(pageOptions) {
      dispatch(actionCreators.getTableData(pageOptions))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Table1 extends PureComponent {
  static tableColumns = [
    {
      title: '中文名',
      dataIndex: 'nameCN',
      key: 'nameCN'
    },
    {
      title: '英文名',
      dataIndex: 'nameEN',
      key: 'nameEN'
    },
    {
      title: '地址',
      dataIndex: 'county',
      key: 'county'
    },
    {
      title: '时间',
      dataIndex: 'timer',
      key: 'timer'
    }
  ]

  componentDidMount() {
    const { setBreadcrumb, setTableData } = this.props;

    setBreadcrumb([
      {
        name: '基础表格',
        path: '/app/tables/table1'
      }
    ])

    setTableData();
  }

  pageChange = (currentPage) => {
    this.props.setTableData({
      currentPage
    })
  }

  render() {

    const tableData = this.props.reduxTableData();

    return (
      <div>
        <Table
          pagination={{
            total: 200,
            showQuickJumper: true,
            onChange: this.pageChange,
            showSizeChanger: true
          }}
          loading={tableData.length === 0}
          bordered
          columns={Table1.tableColumns}
          dataSource={tableData}
        />
      </div>
    )
  }
}

export default Table1;