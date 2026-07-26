# `officer_report_access`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| officer_report_access_id | int(11) | NO | PRI | 0 |  |  |
| officer_group_id | int(11) | YES | MUL | NULL |  |  |
| has_time_acl | char(1) | YES |  | NULL |  |  |
| reporttemplate_id | int(11) | YES | MUL | NULL |  |  |
| report_group_type_id | int(11) | YES | MUL | NULL |  |  |
| report_access_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_key | report_group_type_id | no | 1 |
| ix_key | officer_group_id | no | 2 |
| ix_key_index | officer_group_id | no | 1 |
| ix_key_index | report_group_type_id | no | 2 |
| ix_name_group_id | officer_group_id | no | 1 |
| ix_unique | reporttemplate_id | no | 1 |
| ix_unique | report_group_type_id | no | 2 |
| ix_unique | officer_group_id | no | 3 |
| ix_unique_index | officer_group_id | no | 1 |
| ix_unique_index | report_group_type_id | no | 2 |
| ix_unique_index | reporttemplate_id | no | 3 |
| PRIMARY | officer_report_access_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
