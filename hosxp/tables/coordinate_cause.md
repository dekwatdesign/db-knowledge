# `coordinate_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| coordinate_cause_id | varchar(5) | NO | PRI |  |  |  |
| coordinate_cause_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | coordinate_cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "coordinate_cause_id": "01",
    "coordinate_cause_name": "เตียงเต็ม"
  },
  {
    "coordinate_cause_id": "02",
    "coordinate_cause_name": "ไม่มี Respirator"
  },
  {
    "coordinate_cause_id": "03",
    "coordinate_cause_name": "มีศักยภาพ แต่แพทย์เฉพาะทางไม่อยู่"
  },
  {
    "coordinate_cause_id": "04",
    "coordinate_cause_name": "เกินศักยภาพของโรงพยาบาลปลายทาง"
  },
  {
    "coordinate_cause_id": "05",
    "coordinate_cause_name": "สามารถรักษาที่โรงพยาบาลต้นทางได้"
  },
  {
    "coordinate_cause_id": "06",
    "coordinate_cause_name": "อื่นๆ"
  }
]
```
