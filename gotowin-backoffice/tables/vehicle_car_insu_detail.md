# `vehicle_car_insu_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| INSU_ID | int | NO | PRI | NULL | auto_increment |  |
| CAR_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| INSU_COMPANY | varchar(255) | YES |  | NULL |  |  |
| INSU_INSURANCE | varchar(100) | YES |  | NULL |  |  |
| INSU_BEGIN_DATE | date | YES |  | NULL |  |  |
| INSU_END_DATE | date | YES |  | NULL |  |  |
| INSU_PERSON_ID | int | YES |  | NULL |  |  |
| INSU_AGENT | varchar(255) | YES |  | NULL |  |  |
| INSU_AGENT_TEL | varchar(50) | YES |  | NULL |  |  |
| INSU_CHIP | varchar(255) | YES |  | NULL |  |  |
| INSU_END_TIME | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | INSU_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
