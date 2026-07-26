# `cvd_risk_score_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cvd_risk_score_type_id | int(11) | NO | PRI | 0 |  |  |
| cvd_risk_score_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cvd_risk_score_type_name | cvd_risk_score_type_name | yes | 1 |
| PRIMARY | cvd_risk_score_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "cvd_risk_score_type_id": 1,
    "cvd_risk_score_type_name": "ระดับ 1 ความเสี่ยงต่ำ"
  },
  {
    "cvd_risk_score_type_id": 2,
    "cvd_risk_score_type_name": "ระดับ 2 ความเสี่ยงปานกลาง"
  },
  {
    "cvd_risk_score_type_id": 3,
    "cvd_risk_score_type_name": "ระดับ 3 ความเสี่ยงสูง"
  },
  {
    "cvd_risk_score_type_id": 4,
    "cvd_risk_score_type_name": "ระดับ 4 ความเสี่ยงสูงมาก"
  },
  {
    "cvd_risk_score_type_id": 5,
    "cvd_risk_score_type_name": "ระดับ 5 ความเสี่ยงสูงอันตราย"
  }
]
```
