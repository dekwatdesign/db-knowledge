# `iptoprt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iptoprt_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| enddate | date | YES |  | NULL |  |  |
| endtime | time | YES | MUL | NULL |  |  |
| icd9 | varchar(9) | YES | MUL | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| iprice | double(22,3) | YES |  | NULL |  |  |
| iqty | int(11) | YES |  | NULL |  |  |
| opdate | date | YES | MUL | NULL |  |  |
| optime | time | YES | MUL | NULL |  |  |
| priority | tinyint(4) | YES |  | NULL |  |  |
| ext_code | char(2) | YES |  | NULL |  |  |
| oper_type | int(11) | YES |  | NULL |  |  |
| ovst_oper_type | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| modify_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| link_table | varchar(100) | YES | MUL | NULL |  |  |
| link_id | int(11) | YES | MUL | NULL |  |  |
| oper_note_text | text | YES |  | NULL |  |  |
| diag_ext_type_id | int(11) | YES |  | NULL |  |  |
| dx_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_dx_guid | dx_guid | no | 1 |
| ix_endtime_enddate | endtime | no | 1 |
| ix_endtime_enddate | enddate | no | 2 |
| ix_endtime_enddate | optime | no | 3 |
| ix_endtime_enddate | icd9 | no | 4 |
| ix_endtime_enddate | opdate | no | 5 |
| ix_endtime_enddate | an | no | 6 |
| ix_endtime_enddate | doctor | no | 7 |
| ix_endtime_enddate_index | an | no | 1 |
| ix_endtime_enddate_index | doctor | no | 2 |
| ix_endtime_enddate_index | enddate | no | 3 |
| ix_endtime_enddate_index | endtime | no | 4 |
| ix_endtime_enddate_index | icd9 | no | 5 |
| ix_endtime_enddate_index | opdate | no | 6 |
| ix_endtime_enddate_index | optime | no | 7 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_icd9 | icd9 | no | 1 |
| ix_icd9_an | icd9 | no | 1 |
| ix_icd9_an | an | no | 2 |
| ix_icd9_an_index | an | no | 1 |
| ix_icd9_an_index | icd9 | no | 2 |
| ix_link_name | link_table | no | 1 |
| ix_link_name | link_id | no | 2 |
| ix_link_name_index | link_id | no | 1 |
| ix_link_name_index | link_table | no | 2 |
| ix_opdate | opdate | no | 1 |
| ix_optime | optime | no | 1 |
| PRIMARY | iptoprt_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "iptoprt_id": 1,
    "an": "590000289",
    "doctor": "145",
    "enddate": "2016-04-20",
    "endtime": "9:00:00",
    "icd9": "5199",
    "icode": null,
    "iprice": null,
    "iqty": null,
    "opdate": "2016-04-20",
    "optime": "8:30:00",
    "priority": 127,
    "ext_code": null,
    "oper_type": null,
    "ovst_oper_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "link_table": null,
    "link_id": null,
    "oper_note_text": null,
    "diag_ext_type_id": null,
    "dx_guid": null
  },
  {
    "iptoprt_id": 2,
    "an": "590000289",
    "doctor": "305",
    "enddate": "2016-04-20",
    "endtime": "10:00:00",
    "icd9": "9375",
    "icode": null,
    "iprice": null,
    "iqty": null,
    "opdate": "2016-04-20",
    "optime": "9:30:00",
    "priority": 127,
    "ext_code": null,
    "oper_type": null,
    "ovst_oper_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "link_table": null,
    "link_id": null,
    "oper_note_text": null,
    "diag_ext_type_id": null,
    "dx_guid": null
  },
  {
    "iptoprt_id": 3,
    "an": "590000298",
    "doctor": "304",
    "enddate": "2016-04-20",
    "endtime": "16:11:00",
    "icd9": "9375",
    "icode": null,
    "iprice": null,
    "iqty": null,
    "opdate": "2016-04-20",
    "optime": "11:00:00",
    "priority": 127,
    "ext_code": null,
    "oper_type": null,
    "ovst_oper_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "link_table": null,
    "link_id": null,
    "oper_note_text": null,
    "diag_ext_type_id": null,
    "dx_guid": null
  },
  {
    "iptoprt_id": 4,
    "an": "590000220",
    "doctor": "304",
    "enddate": "2016-04-20",
    "endtime": "1:00:00",
    "icd9": "9375",
    "icode": null,
    "iprice": null,
    "iqty": null,
    "opdate": "2016-04-20",
    "optime": "11:30:17",
    "priority": 127,
    "ext_code": null,
    "oper_type": null,
    "ovst_oper_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "link_table": null,
    "link_id": null,
    "oper_note_text": null,
    "diag_ext_type_id": null,
    "dx_guid": null
  },
  {
    "iptoprt_id": 5,
    "an": "590000301",
    "doctor": "305",
    "enddate": "2016-04-21",
    "endtime": "10:00:00",
    "icd9": "9375",
    "icode": null,
    "iprice": null,
    "iqty": null,
    "opdate": "2016-04-21",
    "optime": "9:30:00",
    "priority": 127,
    "ext_code": null,
    "oper_type": null,
    "ovst_oper_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "link_table": null,
    "link_id": null,
    "oper_note_text": null,
    "diag_ext_type_id": null,
    "dx_guid": null
  },
  {
    "iptoprt_id": 6,
    "an": "590000207",
    "doctor": "145",
    "enddate": "2016-04-21",
    "endtime": "10:30:09",
    "icd9": "5199",
    "icode": null,
    "iprice": null,
    "iqty": null,
    "opdate": "2016-04-21",
    "optime": "10:10:09",
    "priority": 127,
    "ext_code": null,
    "oper_type": null,
    "ovst_oper_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "link_table": null,
    "link_id": null,
    "oper_note_text": null,
    "diag_ext_type_id": null,
    "dx_guid": null
  },
  {
    "iptoprt_id": 7,
    "an": "590000297",
    "doctor": "099",
    "enddate": "2016-04-01",
    "endtime": "1:00:00",
    "icd9": "9383",
    "icode": null,
    "iprice": null,
    "iqty": null,
    "opdate": "2016-04-21",
    "optime": "11:30:40",
    "priority": 127,
    "ext_code": null,
    "oper_type": null,
    "ovst_oper_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "link_table": null,
    "link_id": null,
    "oper_note_text": null,
    "diag_ext_type_id": null,
    "dx_guid": null
  },
  {
    "iptoprt_id": 8,
    "an": "590000215",
    "doctor": "099",
    "enddate": "2016-04-21",
    "endtime": "1:00:00",
    "icd9": "9383",
    "icode": null,
    "iprice": null,
    "iqty": null,
    "opdate": "2016-04-21",
    "optime": "11:30:00",
    "priority": 127,
    "ext_code": null,
    "oper_type": null,
    "ovst_oper_type": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "entry_datetime": null,
    "modify_datetime": null,
    "staff": null,
    "link_table": null,
    "link_id": null,
    "oper_note_text": null,
    "diag_ext_type_id": null,
    "dx_guid": null
  }
]
```
