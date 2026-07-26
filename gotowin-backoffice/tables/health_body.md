# `health_body`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| HEALTH_BODY_ID | int | NO | PRI | NULL | auto_increment |  |
| HEALTH_SCREEN_ID | int | YES |  | NULL |  |  |
| HEALTH_BODY_DATE | date | YES |  | NULL |  |  |
| HEALTH_BODY_BLOOD11 | varchar(20) | YES |  | NULL |  |  |
| HEALTH_BODY_BLOOD12 | varchar(20) | YES |  | NULL |  |  |
| HEALTH_BODY_BLOOD21 | varchar(20) | YES |  | NULL |  |  |
| HEALTH_BODY_BLOOD22 | varchar(20) | YES |  | NULL |  |  |
| HEALTH_BODY_BLOOD_LOWER | varchar(20) | YES |  | NULL |  |  |
| HEALTH_BODY_BLOOD_TOP | varchar(20) | YES |  | NULL |  |  |
| HEALTH_BODY_WAISTLINE | varchar(50) | YES |  | NULL |  |  |
| HEALTH_BODY_BEWAN | varchar(20) | YES |  | NULL |  |  |
| HEALTH_BODY_SUGAR | varchar(20) | YES |  | NULL |  |  |
| HEALTH_BODY_MG | varchar(100) | YES |  | NULL |  |  |
| HEALTH_BODY_COMMENT | varchar(255) | YES |  | NULL |  |  |
| HEALTH_BODY_RISK | varchar(20) | YES |  | NULL |  |  |
| HEALTH_BODY_RISKDETAIL | varchar(255) | YES |  | NULL |  |  |
| HEALTH_BODY_ADVICE | varchar(255) | YES |  | NULL |  |  |
| HEALTH_BODY_SEND | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | HEALTH_BODY_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
