# `vehicle_car_act_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ACT_ID | int | NO | PRI | NULL | auto_increment |  |
| CAR_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| ACT_COMPANY | varchar(255) | YES |  | NULL |  |  |
| ACT_INSURANCE | varchar(100) | YES |  | NULL |  |  |
| ACT_CHIP | varchar(11) | YES |  | NULL |  |  |
| ACT_BEGIN_DATE | date | YES |  | NULL |  |  |
| ACT_END_DATE | date | YES |  | NULL |  |  |
| ACT_END_TIME | time | YES |  | NULL |  |  |
| ACT_PERSON_ID | int | YES |  | NULL |  |  |
| ACT_AGENT | varchar(255) | YES |  | NULL |  |  |
| ACT_AGENT_TEL | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ACT_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
