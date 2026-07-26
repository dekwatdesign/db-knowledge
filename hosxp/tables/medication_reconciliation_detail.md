# `medication_reconciliation_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medication_reconciliation_detail_id | int(11) | NO | PRI | 0 |  |  |
| medication_reconciliation_id | int(11) | YES |  | NULL |  |  |
| medication_name | varchar(150) | YES |  | NULL |  |  |
| receive_location | varchar(150) | YES |  | NULL |  |  |
| last_receive_date | date | YES |  | NULL |  |  |
| doctor_reconciliation_command_id | int(11) | YES |  | NULL |  |  |
| medication_reconciliation_manage_id | int(11) | YES |  | NULL |  |  |
| medication_change_cause | varchar(250) | YES |  | NULL |  |  |
| usage_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| first_entry_date | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | medication_reconciliation_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "medication_reconciliation_detail_id": 3,
    "medication_reconciliation_id": 16,
    "medication_name": "LORazepam 0.5 mg เม็ด",
    "receive_location": "รับยาจาก รพ.",
    "last_receive_date": "2019-12-12",
    "doctor_reconciliation_command_id": null,
    "medication_reconciliation_manage_id": null,
    "medication_change_cause": null,
    "usage_name": "รับประทานครั้งละ ครึ่ง เม็ด ก่อนนอน",
    "hos_guid": null,
    "qty": 30,
    "first_entry_date": "2020-11-18 11:44:11"
  },
  {
    "medication_reconciliation_detail_id": 4,
    "medication_reconciliation_id": 16,
    "medication_name": "risPEL Solution ##(Risperidone) 1 mg./ml. ขวด",
    "receive_location": "รับยาจาก รพ.",
    "last_receive_date": "2019-12-12",
    "doctor_reconciliation_command_id": null,
    "medication_reconciliation_manage_id": null,
    "medication_change_cause": null,
    "usage_name": "",
    "hos_guid": null,
    "qty": 2,
    "first_entry_date": "2020-11-18 11:44:11"
  },
  {
    "medication_reconciliation_detail_id": 5,
    "medication_reconciliation_id": 21,
    "medication_name": "omeprazole 20 mg",
    "receive_location": "รับยาจาก รพ.",
    "last_receive_date": null,
    "doctor_reconciliation_command_id": 1,
    "medication_reconciliation_manage_id": 2,
    "medication_change_cause": null,
    "usage_name": "รับประทานวะนละ 1 ครั้ง ครั้งละ 1 เม็ด ก่อนอาหารเช้า",
    "hos_guid": null,
    "qty": null,
    "first_entry_date": "2021-12-15 09:22:10"
  },
  {
    "medication_reconciliation_detail_id": 6,
    "medication_reconciliation_id": 21,
    "medication_name": "Acetylcysteine (Nac long) 600 mg",
    "receive_location": "รับยาจาก รพ.",
    "last_receive_date": null,
    "doctor_reconciliation_command_id": 1,
    "medication_reconciliation_manage_id": null,
    "medication_change_cause": null,
    "usage_name": "รับประทานวันละ 1 ครั้ง 1 เม็ด ผสมน้ำ",
    "hos_guid": null,
    "qty": null,
    "first_entry_date": "2021-12-15 09:23:19"
  },
  {
    "medication_reconciliation_detail_id": 7,
    "medication_reconciliation_id": 22,
    "medication_name": "ABILIFY (Aripiprazole) 2 mg เม็ด",
    "receive_location": "รับยาจาก รพ.",
    "last_receive_date": "2021-12-09",
    "doctor_reconciliation_command_id": null,
    "medication_reconciliation_manage_id": 2,
    "medication_change_cause": null,
    "usage_name": "รับประทาน ครั้งละ    1    เม็ด วันละ 1 ครั้ง หลังอาหารเช้า",
    "hos_guid": null,
    "qty": 10,
    "first_entry_date": "2021-12-15 12:53:47"
  },
  {
    "medication_reconciliation_detail_id": 8,
    "medication_reconciliation_id": 22,
    "medication_name": "SERTRA (Sertraline) 50 mg เม็ด",
    "receive_location": "รับยาจาก รพ.",
    "last_receive_date": "2021-12-09",
    "doctor_reconciliation_command_id": null,
    "medication_reconciliation_manage_id": 2,
    "medication_change_cause": null,
    "usage_name": "รับประทาน ครั้งละ    1    เม็ด วันละ 1 ครั้ง หลังอาหารเช้า",
    "hos_guid": null,
    "qty": 10,
    "first_entry_date": "2021-12-15 12:53:47"
  },
  {
    "medication_reconciliation_detail_id": 12,
    "medication_reconciliation_id": 25,
    "medication_name": "EnCORate CR 200 mg เม็ด",
    "receive_location": "รับยาจาก รพ.",
    "last_receive_date": "2021-10-29",
    "doctor_reconciliation_command_id": null,
    "medication_reconciliation_manage_id": null,
    "medication_change_cause": null,
    "usage_name": "รับประทาน 2 เมด เช้า และ 2 เมด ก่อนนอน",
    "hos_guid": null,
    "qty": 20,
    "first_entry_date": "2021-12-23 11:23:44"
  },
  {
    "medication_reconciliation_detail_id": 13,
    "medication_reconciliation_id": 25,
    "medication_name": "Risperidone GPO(ริสเพอริโดน) 1 mg เม็ด",
    "receive_location": "รับยาจาก รพ.",
    "last_receive_date": "2021-10-29",
    "doctor_reconciliation_command_id": null,
    "medication_reconciliation_manage_id": null,
    "medication_change_cause": null,
    "usage_name": "",
    "hos_guid": null,
    "qty": 5,
    "first_entry_date": "2021-12-23 11:23:44"
  }
]
```
