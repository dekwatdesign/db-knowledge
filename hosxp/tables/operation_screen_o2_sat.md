# `operation_screen_o2_sat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_screen_o2_sat_id | int(11) | NO | PRI | 0 |  |  |
| operation_screen_o2_sat_name | varchar(200) | YES | UNI | NULL |  |  |
| score | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_screen_o2_sat_name | operation_screen_o2_sat_name | yes | 1 |
| PRIMARY | operation_screen_o2_sat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "operation_screen_o2_sat_id": 1,
    "operation_screen_o2_sat_name": "สามารถรักษาระดับ O2 saturation ได้มากกว่า 92% เมื่อหายใจอากาศปกติ",
    "score": 2
  },
  {
    "operation_screen_o2_sat_id": 2,
    "operation_screen_o2_sat_name": "ต้องใช้ O2 inhalation เพื่อรักษาระดับ O2 saturation ให้มากกว่า 90%",
    "score": 1
  },
  {
    "operation_screen_o2_sat_id": 3,
    "operation_screen_o2_sat_name": "O2 saturation น้อยกว่า 90% ถึงแม้ได้รับ O2 supplementation",
    "score": 0
  }
]
```
