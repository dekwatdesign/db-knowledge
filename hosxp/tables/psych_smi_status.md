# `psych_smi_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_smi_status_id | int(11) | NO | PRI | 0 |  |  |
| psych_smi_status_name | varchar(255) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_smi_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psych_smi_status_id": 1,
    "psych_smi_status_name": "ติดตาม",
    "active": null
  },
  {
    "psych_smi_status_id": 2,
    "psych_smi_status_name": "ไม่ติดตาม",
    "active": null
  },
  {
    "psych_smi_status_id": 3,
    "psych_smi_status_name": "ส่งต่อไปสถานพยาบาลอื่น",
    "active": null
  }
]
```
