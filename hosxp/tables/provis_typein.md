# `provis_typein`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(1) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "code": "1",
    "name": "มารับบริการเอง"
  },
  {
    "code": "2",
    "name": "มารับบริการตามนัดหมาย"
  },
  {
    "code": "3",
    "name": "ได้รับการส่งต่อจากสถานพยาบาลอื่น"
  },
  {
    "code": "4",
    "name": "ได้รับการส่งตัวจากบริการ EMS"
  },
  {
    "code": "5",
    "name": "รับบริการสาธารณสุขระบบทางไกล (Telehealth/Telemedicine)"
  }
]
```
