# `income`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| income | char(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | MUL | NULL |  |  |
| bill_order | tinyint(4) | YES |  | NULL |  |  |
| income_group | char(2) | YES | MUL | NULL |  |  |
| group1 | tinyint(4) | YES | MUL | NULL |  |  |
| group2 | tinyint(4) | YES | MUL | NULL |  |  |
| group3 | tinyint(4) | YES | MUL | NULL |  |  |
| group4 | tinyint(4) | YES | MUL | NULL |  |  |
| def_paidst | char(2) | YES |  | NULL |  |  |
| dummy_icode | varchar(7) | YES |  | NULL |  |  |
| outline | varchar(15) | YES | MUL | NULL |  |  |
| header1 | varchar(150) | YES |  | NULL |  |  |
| header2 | varchar(150) | YES |  | NULL |  |  |
| income_guid | varchar(38) | YES | MUL | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| drg_group | char(2) | YES |  | NULL |  |  |
| std_group | char(2) | YES |  | NULL |  |  |
| nk2_group | int(11) | YES |  | NULL |  |  |
| ename | varchar(150) | YES |  | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| drg_chrgitem_id | int(11) | YES |  | NULL |  |  |
| no_send_sks | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| rvsp_group | varchar(10) | YES |  | NULL |  |  |
| income_sss_group_code | varchar(15) | YES |  | NULL |  |  |
| allow_split_finance | char(1) | YES |  | NULL |  |  |
| finance_tran_order | int(11) | YES |  | NULL |  |  |
| no_sp_discount | char(1) | YES |  | NULL |  |  |
| finance_split_icode | varchar(7) | YES |  | NULL |  |  |
| sr1_acc_chart_code | varchar(20) | YES |  | NULL |  |  |
| income_csmbs_code | varchar(2) | YES |  | NULL |  |  |
| dc1_acc_chart_code | varchar(20) | YES |  | NULL |  |  |
| sr2_acc_chart_code | varchar(20) | YES |  | NULL |  |  |
| inceom_group | varchar(2) | YES |  | NULL |  |  |
| drg_chargitem_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| group1 | group1 | no | 1 |
| group2 | group2 | no | 1 |
| group3 | group3 | no | 1 |
| group4 | group4 | no | 1 |
| income_group | income_group | no | 1 |
| ix_income_guid | income_guid | no | 1 |
| ix_outline | outline | no | 1 |
| name | name | no | 1 |
| PRIMARY | income | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "income": "01",
    "name": "01 ค่าห้องและค่าอาหาร",
    "bill_order": 1,
    "income_group": "16",
    "group1": null,
    "group2": 1,
    "group3": null,
    "group4": null,
    "def_paidst": null,
    "dummy_icode": "3001163",
    "outline": "2.1",
    "header1": null,
    "header2": null,
    "income_guid": null,
    "note": null,
    "drg_group": "07",
    "std_group": "01",
    "nk2_group": 16,
    "ename": null,
    "display_order": null,
    "drg_chrgitem_id": 1,
    "no_send_sks": "N",
    "hos_guid": null,
    "rvsp_group": "1",
    "income_sss_group_code": "01",
    "allow_split_finance": "Y",
    "finance_tran_order": null,
    "no_sp_discount": null,
    "finance_split_icode": null,
    "sr1_acc_chart_code": null,
    "income_csmbs_code": "01",
    "dc1_acc_chart_code": null,
    "sr2_acc_chart_code": null,
    "inceom_group": null,
    "drg_chargitem_id": null
  },
  {
    "income": "02",
    "name": "02 ค่าอวัยวะเทียมและอุปกรณ์ในการบำบัดรักษาโรค",
    "bill_order": 2,
    "income_group": "08",
    "group1": null,
    "group2": 2,
    "group3": null,
    "group4": null,
    "def_paidst": null,
    "dummy_icode": "3001164",
    "outline": "1.1.7",
    "header1": null,
    "header2": null,
    "income_guid": null,
    "note": null,
    "drg_group": "09",
    "std_group": "02",
    "nk2_group": 9,
    "ename": null,
    "display_order": null,
    "drg_chrgitem_id": 2,
    "no_send_sks": "N",
    "hos_guid": null,
    "rvsp_group": "2",
    "income_sss_group_code": "02",
    "allow_split_finance": "Y",
    "finance_tran_order": null,
    "no_sp_discount": null,
    "finance_split_icode": null,
    "sr1_acc_chart_code": null,
    "income_csmbs_code": null,
    "dc1_acc_chart_code": null,
    "sr2_acc_chart_code": null,
    "inceom_group": null,
    "drg_chargitem_id": null
  },
  {
    "income": "03",
    "name": "03 ค่ายาในบัญชียาหลักแห่งชาติ",
    "bill_order": 3,
    "income_group": "12",
    "group1": null,
    "group2": 3,
    "group3": null,
    "group4": null,
    "def_paidst": null,
    "dummy_icode": "3001165",
    "outline": "1.1.1",
    "header1": null,
    "header2": null,
    "income_guid": null,
    "note": null,
    "drg_group": "05",
    "std_group": "03",
    "nk2_group": 12,
    "ename": null,
    "display_order": null,
    "drg_chrgitem_id": 3,
    "no_send_sks": "N",
    "hos_guid": null,
    "rvsp_group": "4",
    "income_sss_group_code": "03",
    "allow_split_finance": "Y",
    "finance_tran_order": null,
    "no_sp_discount": null,
    "finance_split_icode": null,
    "sr1_acc_chart_code": null,
    "income_csmbs_code": null,
    "dc1_acc_chart_code": null,
    "sr2_acc_chart_code": null,
    "inceom_group": null,
    "drg_chargitem_id": null
  },
  {
    "income": "04",
    "name": "04 ค่ายากลับบ้าน",
    "bill_order": 4,
    "income_group": "12",
    "group1": null,
    "group2": 4,
    "group3": null,
    "group4": null,
    "def_paidst": null,
    "dummy_icode": "3001166",
    "outline": "1.1.1(2)",
    "header1": null,
    "header2": null,
    "income_guid": null,
    "note": null,
    "drg_group": "05",
    "std_group": "04",
    "nk2_group": 12,
    "ename": null,
    "display_order": null,
    "drg_chrgitem_id": 4,
    "no_send_sks": "N",
    "hos_guid": null,
    "rvsp_group": "5",
    "income_sss_group_code": "04",
    "allow_split_finance": "Y",
    "finance_tran_order": null,
    "no_sp_discount": null,
    "finance_split_icode": null,
    "sr1_acc_chart_code": null,
    "income_csmbs_code": null,
    "dc1_acc_chart_code": null,
    "sr2_acc_chart_code": null,
    "inceom_group": null,
    "drg_chargitem_id": null
  },
  {
    "income": "05",
    "name": "05 ค่าเวชภัณฑ์ที่มิใช่ยา",
    "bill_order": 5,
    "income_group": "12",
    "group1": null,
    "group2": 5,
    "group3": null,
    "group4": null,
    "def_paidst": null,
    "dummy_icode": "3001167",
    "outline": "1.1.2",
    "header1": null,
    "header2": null,
    "income_guid": null,
    "note": null,
    "drg_group": "05",
    "std_group": "05",
    "nk2_group": 12,
    "ename": null,
    "display_order": null,
    "drg_chrgitem_id": 5,
    "no_send_sks": "N",
    "hos_guid": null,
    "rvsp_group": "6",
    "income_sss_group_code": "05",
    "allow_split_finance": "Y",
    "finance_tran_order": null,
    "no_sp_discount": null,
    "finance_split_icode": null,
    "sr1_acc_chart_code": null,
    "income_csmbs_code": null,
    "dc1_acc_chart_code": null,
    "sr2_acc_chart_code": null,
    "inceom_group": null,
    "drg_chargitem_id": null
  },
  {
    "income": "06",
    "name": "06 ค่าบริการโลหิตและส่วนประกอบของโลหิต",
    "bill_order": 6,
    "income_group": "02",
    "group1": null,
    "group2": 6,
    "group3": null,
    "group4": null,
    "def_paidst": null,
    "dummy_icode": "3001168",
    "outline": "1.1.3",
    "header1": null,
    "header2": null,
    "income_guid": null,
    "note": null,
    "drg_group": "09",
    "std_group": "06",
    "nk2_group": 2,
    "ename": null,
    "display_order": null,
    "drg_chrgitem_id": 6,
    "no_send_sks": "N",
    "hos_guid": null,
    "rvsp_group": "7",
    "income_sss_group_code": "06",
    "allow_split_finance": "Y",
    "finance_tran_order": null,
    "no_sp_discount": null,
    "finance_split_icode": null,
    "sr1_acc_chart_code": null,
    "income_csmbs_code": null,
    "dc1_acc_chart_code": null,
    "sr2_acc_chart_code": null,
    "inceom_group": null,
    "drg_chargitem_id": null
  },
  {
    "income": "07",
    "name": "07 ค่าตรวจวินิจฉัยทางเทคนิคการแพทย์และพยาธิวิทยา",
    "bill_order": 7,
    "income_group": "01",
    "group1": null,
    "group2": 7,
    "group3": null,
    "group4": null,
    "def_paidst": null,
    "dummy_icode": "3001169",
    "outline": "1.1.4",
    "header1": null,
    "header2": null,
    "income_guid": null,
    "note": null,
    "drg_group": "02",
    "std_group": "07",
    "nk2_group": 1,
    "ename": null,
    "display_order": null,
    "drg_chrgitem_id": 7,
    "no_send_sks": "N",
    "hos_guid": null,
    "rvsp_group": "8",
    "income_sss_group_code": "07",
    "allow_split_finance": "Y",
    "finance_tran_order": null,
    "no_sp_discount": null,
    "finance_split_icode": null,
    "sr1_acc_chart_code": null,
    "income_csmbs_code": null,
    "dc1_acc_chart_code": null,
    "sr2_acc_chart_code": null,
    "inceom_group": null,
    "drg_chargitem_id": null
  },
  {
    "income": "08",
    "name": "08 ค่าตรวจวินิจฉัยและรักษาทางรังสีวิทยา",
    "bill_order": 8,
    "income_group": "04",
    "group1": null,
    "group2": 8,
    "group3": null,
    "group4": null,
    "def_paidst": null,
    "dummy_icode": "3001170",
    "outline": "1.1.5",
    "header1": null,
    "header2": null,
    "income_guid": null,
    "note": null,
    "drg_group": "01",
    "std_group": "08",
    "nk2_group": 4,
    "ename": null,
    "display_order": null,
    "drg_chrgitem_id": 8,
    "no_send_sks": "N",
    "hos_guid": null,
    "rvsp_group": "9",
    "income_sss_group_code": "08",
    "allow_split_finance": "Y",
    "finance_tran_order": null,
    "no_sp_discount": null,
    "finance_split_icode": null,
    "sr1_acc_chart_code": null,
    "income_csmbs_code": null,
    "dc1_acc_chart_code": null,
    "sr2_acc_chart_code": null,
    "inceom_group": null,
    "drg_chargitem_id": null
  }
]
```
