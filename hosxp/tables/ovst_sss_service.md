# `ovst_sss_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(50) | NO | PRI |  |  |  |
| service_id | varchar(50) | YES |  | NULL |  |  |
| service_class | varchar(2) | YES |  | NULL |  |  |
| hospital_code | varchar(9) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| care_account | varchar(1) | YES |  | NULL |  |  |
| type_service | varchar(2) | YES |  | NULL |  |  |
| type_in | varchar(1) | YES |  | NULL |  |  |
| type_out | varchar(1) | YES |  | NULL |  |  |
| date_appoint | date | YES |  | NULL |  |  |
| service_pid | varchar(25) | YES |  | NULL |  |  |
| clinic | varchar(2) | YES |  | NULL |  |  |
| begin_datetime | datetime | YES |  | NULL |  |  |
| end_datetime | datetime | YES |  | NULL |  |  |
| lc_code | varchar(10) | YES |  | NULL |  |  |
| code_set | varchar(2) | YES |  | NULL |  |  |
| std_code | varchar(20) | YES |  | NULL |  |  |
| service_charge_amount | double(15,3) | YES |  | NULL |  |  |
| completion | char(1) | YES |  | NULL |  |  |
| service_tx_code | varchar(15) | YES |  | NULL |  |  |
| claim_category | varchar(3) | YES |  | NULL |  |  |
| invno | varchar(25) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_invno | invno | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "650505100722:355069",
    "service_id": "650505100722",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "650005096",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": null,
    "service_pid": "ว57889",
    "clinic": "99",
    "begin_datetime": "2022-05-05 10:07:22",
    "end_datetime": "2022-05-05 12:07:22",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "355069"
  },
  {
    "vn": "650505134400:355068",
    "service_id": "650505134400",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "650005099",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": null,
    "service_pid": "",
    "clinic": "99",
    "begin_datetime": "2022-05-05 13:44:00",
    "end_datetime": "2022-05-05 15:44:00",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "355068"
  },
  {
    "vn": "650506081612:355122",
    "service_id": "650506081612",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "640004944",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": null,
    "service_pid": "",
    "clinic": "99",
    "begin_datetime": "2022-05-06 08:16:12",
    "end_datetime": "2022-05-06 10:16:12",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "355122"
  },
  {
    "vn": "650506085347:355084",
    "service_id": "650506085347",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "530076239",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": null,
    "service_pid": "ว57889",
    "clinic": "99",
    "begin_datetime": "2022-05-06 08:53:47",
    "end_datetime": "2022-05-06 10:53:47",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "355084"
  },
  {
    "vn": "650506085529:355083",
    "service_id": "650506085529",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "530093847",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": "2022-08-31",
    "service_pid": "ว57889",
    "clinic": "99",
    "begin_datetime": "2022-05-06 08:55:29",
    "end_datetime": "2022-05-06 10:55:29",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "355083"
  },
  {
    "vn": "650506093637:355125",
    "service_id": "650506093637",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "620000472",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": null,
    "service_pid": "",
    "clinic": "99",
    "begin_datetime": "2022-05-06 09:36:37",
    "end_datetime": "2022-05-06 11:36:37",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "355125"
  },
  {
    "vn": "650506093901:355123",
    "service_id": "650506093901",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "630000605",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": "2022-06-02",
    "service_pid": "",
    "clinic": "99",
    "begin_datetime": "2022-05-06 09:39:01",
    "end_datetime": "2022-05-06 11:39:01",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "355123"
  },
  {
    "vn": "650506093933:355124",
    "service_id": "650506093933",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "530234050",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": null,
    "service_pid": "",
    "clinic": "99",
    "begin_datetime": "2022-05-06 09:39:33",
    "end_datetime": "2022-05-06 11:39:33",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "355124"
  }
]
```
