# `asset_care_calibration`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ASSET_CALIBRATION_ID | int | NO | PRI | NULL | auto_increment |  |
| ASSET_CALIBRATION_DATE | date | YES |  | NULL |  |  |
| ASSET_CALIBRATION_TIME | time | YES |  | NULL |  |  |
| ASSET_CALIBRATION_TYPE | varchar(255) | YES |  | NULL |  |  |
| ASSET_CALIBRATION_COMMENT | varchar(255) | YES |  | NULL |  |  |
| ASSET_CALIBRATION | varchar(255) | YES |  | NULL |  |  |
| ASSET_CALIBRATION_RESULTS | varchar(255) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| ASSET_CALIBRATION_ARTICLE_ID | varchar(100) | YES |  | NULL |  |  |
| ASSET_CALIBRATION_ARTICLE_NUM | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ASSET_CALIBRATION_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
