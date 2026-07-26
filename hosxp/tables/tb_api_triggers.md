# `tb_api_triggers`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| triggers_id | varchar(50) | NO | PRI |  |  |  |
| CompanyId | varchar(15) | YES |  | NULL |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| vn | varchar(15) | YES |  | NULL |  |  |
| an | varchar(10) | YES |  | NULL |  |  |
| key1 | varchar(15) | YES |  | NULL |  |  |
| key2 | varchar(15) | YES |  | NULL |  |  |
| key3 | varchar(15) | YES |  | NULL |  |  |
| modul_name | varchar(50) | YES |  | NULL |  |  |
| modul_event | varchar(20) | YES |  | NULL |  |  |
| triggers_datetime | datetime | YES |  | NULL |  |  |
| triggers_read_status | char(2) | YES |  | NULL |  |  |
| triggers_read_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | triggers_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "triggers_id": "{000158AC-E3F6-11ED-BE23-5CF3FC271C93}",
    "CompanyId": "LYhWfcJCXApqvsZ",
    "hn": "530109844",
    "vn": "",
    "an": "",
    "key1": "",
    "key2": "",
    "key3": "",
    "modul_name": "PatientData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2023-04-26 12:48:41",
    "triggers_read_status": "N",
    "triggers_read_datetime": "2023-04-26 12:48:41"
  },
  {
    "triggers_id": "{00082837-7A6F-11EC-9B1B-5CF3FC2C7D4F}",
    "CompanyId": "LYhWfcJCXApqvsZ",
    "hn": "650000480",
    "vn": "",
    "an": "",
    "key1": "",
    "key2": "",
    "key3": "",
    "modul_name": "PatientData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2022-01-21 11:02:50",
    "triggers_read_status": "N",
    "triggers_read_datetime": "2022-01-21 11:02:50"
  },
  {
    "triggers_id": "{000DC0D9-DE00-11EB-A39A-5CF3FC2C7D4F}",
    "CompanyId": "LYhWfcJCXApqvsZ",
    "hn": "640003196",
    "vn": "",
    "an": "",
    "key1": "",
    "key2": "",
    "key3": "",
    "modul_name": "PatientData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2021-07-06 09:15:14",
    "triggers_read_status": "N",
    "triggers_read_datetime": "2021-07-06 09:15:14"
  },
  {
    "triggers_id": "{00157E33-D7D4-11EB-A39A-5CF3FC2C7D4F}",
    "CompanyId": "LYhWfcJCXApqvsZ",
    "hn": "640002573",
    "vn": "",
    "an": "",
    "key1": "",
    "key2": "",
    "key3": "",
    "modul_name": "PatientData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2021-06-28 12:45:09",
    "triggers_read_status": "N",
    "triggers_read_datetime": "2021-06-28 12:45:09"
  },
  {
    "triggers_id": "{00163978-41CD-11EC-875C-5CF3FC2C7D4F}",
    "CompanyId": "LYhWfcJCXApqvsZ",
    "hn": "640009221",
    "vn": "",
    "an": "",
    "key1": "",
    "key2": "",
    "key3": "",
    "modul_name": "PatientData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2021-11-10 09:22:06",
    "triggers_read_status": "N",
    "triggers_read_datetime": "2021-11-10 09:22:06"
  },
  {
    "triggers_id": "{001676DA-9DC7-11EC-8891-5CF3FC2C7D4F}",
    "CompanyId": "LYhWfcJCXApqvsZ",
    "hn": "650003078",
    "vn": "",
    "an": "",
    "key1": "",
    "key2": "",
    "key3": "",
    "modul_name": "PatientData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2022-03-07 10:30:56",
    "triggers_read_status": "N",
    "triggers_read_datetime": "2022-03-07 10:30:56"
  },
  {
    "triggers_id": "{001733CC-EE84-11EB-A39A-5CF3FC2C7D4F}",
    "CompanyId": "LYhWfcJCXApqvsZ",
    "hn": "640005050",
    "vn": "",
    "an": "",
    "key1": "",
    "key2": "",
    "key3": "",
    "modul_name": "PatientData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2021-07-27 09:40:26",
    "triggers_read_status": "N",
    "triggers_read_datetime": "2021-07-27 09:40:26"
  },
  {
    "triggers_id": "{00228C88-FFCF-11EB-BF4E-5CF3FC2C7D4F}",
    "CompanyId": "LYhWfcJCXApqvsZ",
    "hn": "640006926",
    "vn": "",
    "an": "",
    "key1": "",
    "key2": "",
    "key3": "",
    "modul_name": "PatientData",
    "modul_event": "UPDATE",
    "triggers_datetime": "2021-08-18 09:50:09",
    "triggers_read_status": "N",
    "triggers_read_datetime": "2021-08-18 09:50:09"
  }
]
```
