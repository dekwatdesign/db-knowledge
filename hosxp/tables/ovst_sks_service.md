# `ovst_sks_service`

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
| service_tx_code | varchar(10) | YES |  | NULL |  |  |
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
    "vn": "610702082940",
    "service_id": "610702082940",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "530146052",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": null,
    "service_pid": "ว.41267",
    "clinic": "99",
    "begin_datetime": "2018-07-02 08:29:40",
    "end_datetime": "2018-07-02 10:29:40",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "230232"
  },
  {
    "vn": "610702083014",
    "service_id": "610702083014",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "580001560",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": "2018-07-16",
    "service_pid": "-99999",
    "clinic": "99",
    "begin_datetime": "2018-07-02 08:30:14",
    "end_datetime": "2018-07-02 10:30:14",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "230193"
  },
  {
    "vn": "610702083024",
    "service_id": "610702083024",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "530116351",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": null,
    "service_pid": "-99999",
    "clinic": "99",
    "begin_datetime": "2018-07-02 08:30:24",
    "end_datetime": "2018-07-02 10:30:24",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "230270"
  },
  {
    "vn": "610702083044",
    "service_id": "610702083044",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "610000486",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": "2018-10-18",
    "service_pid": "ว.41267",
    "clinic": "99",
    "begin_datetime": "2018-07-02 08:30:44",
    "end_datetime": "2018-07-02 10:30:44",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "230257"
  },
  {
    "vn": "610702090036",
    "service_id": "610702090036",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "580000054",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": "2018-10-26",
    "service_pid": "ว.24604",
    "clinic": "99",
    "begin_datetime": "2018-07-02 09:00:36",
    "end_datetime": "2018-07-02 11:00:36",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "230302"
  },
  {
    "vn": "610702090624",
    "service_id": "610702090624",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "530004951",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": null,
    "service_pid": "ว.41267",
    "clinic": "99",
    "begin_datetime": "2018-07-02 09:06:24",
    "end_datetime": "2018-07-02 11:06:24",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "230231"
  },
  {
    "vn": "610702093036",
    "service_id": "610702093036",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "530119650",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": "2019-01-07",
    "service_pid": "ว.23215",
    "clinic": "99",
    "begin_datetime": "2018-07-02 09:30:36",
    "end_datetime": "2018-07-02 11:30:36",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "230211"
  },
  {
    "vn": "610702095200",
    "service_id": "610702095200",
    "service_class": "EC",
    "hospital_code": "12251",
    "hn": "530076441",
    "pid": "1xxxxxxxxxxxx",
    "care_account": "1",
    "type_service": "01",
    "type_in": "9",
    "type_out": "9",
    "date_appoint": null,
    "service_pid": "ว.3219",
    "clinic": "99",
    "begin_datetime": "2018-07-02 09:52:00",
    "end_datetime": "2018-07-02 11:52:00",
    "lc_code": null,
    "code_set": null,
    "std_code": null,
    "service_charge_amount": 0.0,
    "completion": "Y",
    "service_tx_code": null,
    "claim_category": "OP1",
    "invno": "230259"
  }
]
```
