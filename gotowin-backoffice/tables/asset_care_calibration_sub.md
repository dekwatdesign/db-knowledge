# `asset_care_calibration_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ASSET_CALIBRATION_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| ASSET_CALIBRATION_SID | varchar(100) | YES |  | NULL |  |  |
| ASSET_CALIBRATION_SUB_LIST | varchar(255) | YES |  | NULL |  |  |
| ASSET_CALIBRATION_SUB_LIST_NAME | varchar(255) | YES |  | NULL |  |  |
| ASSET_CALIBRATION_SUB_LISTTRUE | varchar(255) | YES |  | NULL |  |  |
| ASSET_CALIBRATION_SUB_COMMENT | varchar(255) | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| ASSET_CALIBRATION_ARTICLE_ID | varchar(100) | YES |  | NULL |  |  |
| ASSET_CALIBRATION_ARTICLE_NUM | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ASSET_CALIBRATION_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
