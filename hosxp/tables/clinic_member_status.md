# `clinic_member_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_member_status_id | int(11) | NO | PRI | 0 |  |  |
| clinic_member_status_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| provis_typedis | char(2) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_member_status_name | clinic_member_status_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_provis_typedis | provis_typedis | no | 1 |
| PRIMARY | clinic_member_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "clinic_member_status_id": 1,
    "clinic_member_status_name": "หาย/สาบสูญ",
    "hos_guid": null,
    "provis_typedis": "01"
  },
  {
    "clinic_member_status_id": 2,
    "clinic_member_status_name": "เสียชีวิต",
    "hos_guid": null,
    "provis_typedis": "02"
  },
  {
    "clinic_member_status_id": 3,
    "clinic_member_status_name": "ยังรักษาอยู่",
    "hos_guid": null,
    "provis_typedis": "03"
  },
  {
    "clinic_member_status_id": 4,
    "clinic_member_status_name": "ไม่ทราบ (ไม่มีข้อมูล)",
    "hos_guid": null,
    "provis_typedis": "04"
  }
]
```
