# `clinic_dm_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| complication_blood1 | char(1) | YES |  | NULL |  |  |
| complication_blood2 | char(1) | YES |  | NULL |  |  |
| complication_blood3 | char(1) | YES |  | NULL |  |  |
| complication_eye | char(1) | YES |  | NULL |  |  |
| complication_renal | char(1) | YES |  | NULL |  |  |
| complication_nerve1 | char(1) | YES |  | NULL |  |  |
| complication_nerve2 | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
