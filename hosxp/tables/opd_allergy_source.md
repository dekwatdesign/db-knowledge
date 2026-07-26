# `opd_allergy_source`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_allergy_source_id | int(11) | NO | PRI | 0 |  |  |
| opd_allergy_source_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_allergy_source_name | opd_allergy_source_name | yes | 1 |
| PRIMARY | opd_allergy_source_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "opd_allergy_source_id": 2,
    "opd_allergy_source_name": "ผู้ป่วยให้ประวัติจากการให้ข้อมูลของสถานพยาบาลอื่น"
  },
  {
    "opd_allergy_source_id": 1,
    "opd_allergy_source_name": "ผู้ป่วยให้ประวัติเอง "
  },
  {
    "opd_allergy_source_id": 4,
    "opd_allergy_source_name": "สถานพยาบาลแห่งนี้เป็นผู้พบการแพ้ยาเอง"
  },
  {
    "opd_allergy_source_id": 3,
    "opd_allergy_source_name": "สถานพยาบาลอื่นเป็นผู้ให้ข้อมูล "
  }
]
```
