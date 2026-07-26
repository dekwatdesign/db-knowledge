# `handicapped_patient_register_list_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_patient_register_list_cause_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_patient_register_list_cause_name | char(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_patient_register_list_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "handicapped_patient_register_list_cause_id": 1,
    "handicapped_patient_register_list_cause_name": "เสียชีวิต",
    "hos_guid": null
  },
  {
    "handicapped_patient_register_list_cause_id": 2,
    "handicapped_patient_register_list_cause_name": "ไม่ผ่านเกณฑ์การประเมิน",
    "hos_guid": null
  }
]
```
