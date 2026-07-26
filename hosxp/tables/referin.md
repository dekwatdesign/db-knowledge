# `referin`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| rfrcs | char(1) | YES |  | NULL |  |  |
| refer_date | date | YES | MUL | NULL |  |  |
| hospcode | varchar(9) | YES | MUL | NULL |  |  |
| date_in | date | YES |  | NULL |  |  |
| clinic | char(3) | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| refer_type | tinyint(4) | YES |  | NULL |  |  |
| docno | varchar(50) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| refer_point | varchar(10) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| confirm_date | date | YES |  | NULL |  |  |
| pre_diagnosis | varchar(200) | YES |  | NULL |  |  |
| ac_type | char(1) | YES |  | NULL |  |  |
| claim_code | varchar(20) | YES |  | NULL |  |  |
| ac_ae | char(1) | YES |  | NULL |  |  |
| ac_emtype | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| has_expire_date | char(1) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |
| f43_causein_id | int(11) | YES |  | NULL |  |  |
| refer_hospcode | varchar(9) | YES | MUL | NULL |  |  |
| referin_number | varchar(100) | YES |  | NULL |  |  |
| referout_number | varchar(100) | YES |  | NULL |  |  |
| referin_id | int(11) | YES | MUL | NULL |  |  |
| refer_time | time | YES |  | NULL |  |  |
| refer_begin_time | time | YES |  | NULL |  |  |
| refer_end_time | time | YES |  | NULL |  |  |
| refer_process_time_hour | int(11) | YES |  | NULL |  |  |
| refer_process_time_minute | int(11) | YES |  | NULL |  |  |
| refer_response_type_id | int(11) | YES |  | NULL |  |  |
| refer_doctor_name | varchar(100) | YES |  | NULL |  |  |
| refer_diag | varchar(250) | YES |  | NULL |  |  |
| cloud_refer_cause_text | varchar(100) | YES |  | NULL |  |  |
| cloud_rfrcs_text | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ix_hn | hn | no | 1 |
| ix_ix_hospcode | hospcode | no | 1 |
| ix_ix_refer_date | refer_date | no | 1 |
| ix_referin | referin_id | no | 1 |
| ix_refer_hospcode | refer_hospcode | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "1xxxxxxxxxxxx",
    "rfrcs": "",
    "refer_date": "2019-01-09",
    "hospcode": null,
    "date_in": "2002-06-11",
    "clinic": null,
    "hn": "530145845",
    "icd10": "F701",
    "refer_type": 1,
    "docno": "27647",
    "depcode": "000",
    "refer_point": "OPD",
    "staff": "[MASKED_FULLNAME]",
    "confirm_date": null,
    "pre_diagnosis": null,
    "ac_type": "",
    "claim_code": "",
    "ac_ae": "",
    "ac_emtype": "",
    "hos_guid": null,
    "has_expire_date": "Y",
    "expire_date": "2020-01-09",
    "f43_causein_id": 3,
    "refer_hospcode": "10685",
    "referin_number": null,
    "referout_number": null,
    "referin_id": null,
    "refer_time": null,
    "refer_begin_time": null,
    "refer_end_time": null,
    "refer_process_time_hour": null,
    "refer_process_time_minute": null,
    "refer_response_type_id": null,
    "refer_doctor_name": null,
    "refer_diag": null,
    "cloud_refer_cause_text": null,
    "cloud_rfrcs_text": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "rfrcs": "",
    "refer_date": "2018-02-08",
    "hospcode": null,
    "date_in": "2005-05-18",
    "clinic": null,
    "hn": "530038348",
    "icd10": "F320",
    "refer_type": 0,
    "docno": "24110",
    "depcode": "000",
    "refer_point": "OPD",
    "staff": "[MASKED_FULLNAME]",
    "confirm_date": null,
    "pre_diagnosis": null,
    "ac_type": "",
    "claim_code": "",
    "ac_ae": "",
    "ac_emtype": "",
    "hos_guid": null,
    "has_expire_date": "N",
    "expire_date": null,
    "f43_causein_id": 3,
    "refer_hospcode": "10685",
    "referin_number": null,
    "referout_number": null,
    "referin_id": null,
    "refer_time": null,
    "refer_begin_time": null,
    "refer_end_time": null,
    "refer_process_time_hour": null,
    "refer_process_time_minute": null,
    "refer_response_type_id": null,
    "refer_doctor_name": null,
    "refer_diag": null,
    "cloud_refer_cause_text": null,
    "cloud_rfrcs_text": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "rfrcs": "",
    "refer_date": "2016-11-04",
    "hospcode": null,
    "date_in": "2008-07-23",
    "clinic": null,
    "hn": "530133951",
    "icd10": "F900",
    "refer_type": 0,
    "docno": "19085",
    "depcode": "000",
    "refer_point": "OPD",
    "staff": "[MASKED_FULLNAME]",
    "confirm_date": null,
    "pre_diagnosis": null,
    "ac_type": "",
    "claim_code": "",
    "ac_ae": "",
    "ac_emtype": "",
    "hos_guid": null,
    "has_expire_date": "N",
    "expire_date": null,
    "f43_causein_id": 3,
    "refer_hospcode": "10685",
    "referin_number": null,
    "referout_number": null,
    "referin_id": null,
    "refer_time": null,
    "refer_begin_time": null,
    "refer_end_time": null,
    "refer_process_time_hour": null,
    "refer_process_time_minute": null,
    "refer_response_type_id": null,
    "refer_doctor_name": null,
    "refer_diag": null,
    "cloud_refer_cause_text": null,
    "cloud_rfrcs_text": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "rfrcs": "",
    "refer_date": "2019-01-08",
    "hospcode": null,
    "date_in": "2010-01-28",
    "clinic": null,
    "hn": "530001251",
    "icd10": "F701",
    "refer_type": 1,
    "docno": "27576",
    "depcode": "000",
    "refer_point": "OPD",
    "staff": "[MASKED_FULLNAME]",
    "confirm_date": null,
    "pre_diagnosis": null,
    "ac_type": "",
    "claim_code": "",
    "ac_ae": "",
    "ac_emtype": "",
    "hos_guid": null,
    "has_expire_date": "Y",
    "expire_date": "2019-04-08",
    "f43_causein_id": 3,
    "refer_hospcode": "10754",
    "referin_number": null,
    "referout_number": null,
    "referin_id": null,
    "refer_time": null,
    "refer_begin_time": null,
    "refer_end_time": null,
    "refer_process_time_hour": null,
    "refer_process_time_minute": null,
    "refer_response_type_id": null,
    "refer_doctor_name": null,
    "refer_diag": null,
    "cloud_refer_cause_text": null,
    "cloud_rfrcs_text": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "rfrcs": "",
    "refer_date": "2019-01-21",
    "hospcode": null,
    "date_in": "2010-09-03",
    "clinic": null,
    "hn": "530140153",
    "icd10": "F411",
    "refer_type": 0,
    "docno": "28229",
    "depcode": "000",
    "refer_point": "OPD",
    "staff": "[MASKED_FULLNAME]",
    "confirm_date": null,
    "pre_diagnosis": null,
    "ac_type": "",
    "claim_code": "",
    "ac_ae": "",
    "ac_emtype": "",
    "hos_guid": null,
    "has_expire_date": "N",
    "expire_date": null,
    "f43_causein_id": 3,
    "refer_hospcode": "10685",
    "referin_number": null,
    "referout_number": null,
    "referin_id": null,
    "refer_time": null,
    "refer_begin_time": null,
    "refer_end_time": null,
    "refer_process_time_hour": null,
    "refer_process_time_minute": null,
    "refer_response_type_id": null,
    "refer_doctor_name": null,
    "refer_diag": null,
    "cloud_refer_cause_text": null,
    "cloud_rfrcs_text": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "rfrcs": "",
    "refer_date": "2016-09-23",
    "hospcode": null,
    "date_in": "2010-09-08",
    "clinic": null,
    "hn": "530145353",
    "icd10": "F900",
    "refer_type": 0,
    "docno": "15346",
    "depcode": "000",
    "refer_point": "OPD",
    "staff": "[MASKED_FULLNAME]",
    "confirm_date": null,
    "pre_diagnosis": null,
    "ac_type": "",
    "claim_code": "",
    "ac_ae": "",
    "ac_emtype": "",
    "hos_guid": null,
    "has_expire_date": "N",
    "expire_date": null,
    "f43_causein_id": 3,
    "refer_hospcode": "10685",
    "referin_number": null,
    "referout_number": null,
    "referin_id": null,
    "refer_time": null,
    "refer_begin_time": null,
    "refer_end_time": null,
    "refer_process_time_hour": null,
    "refer_process_time_minute": null,
    "refer_response_type_id": null,
    "refer_doctor_name": null,
    "refer_diag": null,
    "cloud_refer_cause_text": null,
    "cloud_rfrcs_text": null
  },
  {
    "vn": "550126092531",
    "rfrcs": "",
    "refer_date": "2014-02-25",
    "hospcode": null,
    "date_in": "2012-01-26",
    "clinic": null,
    "hn": "550000125",
    "icd10": "F900",
    "refer_type": 1,
    "docno": "338",
    "depcode": "000",
    "refer_point": "OPD",
    "staff": "[MASKED_FULLNAME]",
    "confirm_date": null,
    "pre_diagnosis": null,
    "ac_type": "",
    "claim_code": "",
    "ac_ae": "",
    "ac_emtype": "",
    "hos_guid": null,
    "has_expire_date": "N",
    "expire_date": null,
    "f43_causein_id": 1,
    "refer_hospcode": "10755",
    "referin_number": null,
    "referout_number": null,
    "referin_id": null,
    "refer_time": null,
    "refer_begin_time": null,
    "refer_end_time": null,
    "refer_process_time_hour": null,
    "refer_process_time_minute": null,
    "refer_response_type_id": null,
    "refer_doctor_name": null,
    "refer_diag": null,
    "cloud_refer_cause_text": null,
    "cloud_rfrcs_text": null
  },
  {
    "vn": "550308101949",
    "rfrcs": "",
    "refer_date": "2018-11-21",
    "hospcode": null,
    "date_in": "2012-03-08",
    "clinic": null,
    "hn": "550000383",
    "icd10": "F900",
    "refer_type": 0,
    "docno": "28199",
    "depcode": "000",
    "refer_point": "OPD",
    "staff": "[MASKED_FULLNAME]",
    "confirm_date": null,
    "pre_diagnosis": null,
    "ac_type": "",
    "claim_code": "",
    "ac_ae": "",
    "ac_emtype": "",
    "hos_guid": null,
    "has_expire_date": "N",
    "expire_date": null,
    "f43_causein_id": 3,
    "refer_hospcode": "10753",
    "referin_number": null,
    "referout_number": null,
    "referin_id": null,
    "refer_time": null,
    "refer_begin_time": null,
    "refer_end_time": null,
    "refer_process_time_hour": null,
    "refer_process_time_minute": null,
    "refer_response_type_id": null,
    "refer_doctor_name": null,
    "refer_diag": null,
    "cloud_refer_cause_text": null,
    "cloud_rfrcs_text": null
  }
]
```
