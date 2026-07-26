# `psych_assess_disabled_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_disabled_level_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_disabled_level_name | varchar(255) | YES |  | NULL |  |  |
| psych_assess_iq_level_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_assess_iq_level_id | psych_assess_iq_level_id | no | 1 |
| PRIMARY | psych_assess_disabled_level_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "psych_assess_disabled_level_id": 1,
    "psych_assess_disabled_level_name": "ไม่มีความพิการ",
    "psych_assess_iq_level_id": 1
  },
  {
    "psych_assess_disabled_level_id": 2,
    "psych_assess_disabled_level_name": "บกพร่อง ทางเชาว์ปัญญา ระดับ 1",
    "psych_assess_iq_level_id": 5
  },
  {
    "psych_assess_disabled_level_id": 3,
    "psych_assess_disabled_level_name": "บกพร่อง ทางเชาว์ปัญญา ระดับ 2",
    "psych_assess_iq_level_id": 6
  },
  {
    "psych_assess_disabled_level_id": 4,
    "psych_assess_disabled_level_name": "บกพร่อง ทางเชาว์ปัญญา ระดับ 3",
    "psych_assess_iq_level_id": 7
  },
  {
    "psych_assess_disabled_level_id": 5,
    "psych_assess_disabled_level_name": "บกพร่อง ทางเชาว์ปัญญา ระดับ 4",
    "psych_assess_iq_level_id": 8
  },
  {
    "psych_assess_disabled_level_id": 6,
    "psych_assess_disabled_level_name": "บกพร่อง ทางเชาว์ปัญญา ระดับ 5",
    "psych_assess_iq_level_id": 9
  }
]
```
