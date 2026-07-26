# `asset_care_calibration_true`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ASSET_CALIBRATIONTRUE_ID | int | NO | PRI | NULL | auto_increment |  |
| ASSET_CALIBRATIONTRUE_DATE | date | YES |  | NULL |  |  |
| ASSET_CALIBRATIONTRUE_TIME | time | YES |  | NULL |  |  |
| ASSET_CALIBRATIONTRUE | varchar(255) | YES |  | NULL |  |  |
| ASSET_CALIBRATIONTRUE_COMMENT | varchar(255) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| ASSET_CALIBRATIONTRUE_ARTICLE_ID | varchar(100) | YES |  | NULL |  |  |
| ASSET_CALIBRATIONTRUE_ARTICLE_NUM | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ASSET_CALIBRATIONTRUE_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
