# `oapp_template_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_template_detail_id | int(11) | NO | PRI | 0 |  |  |
| oapp_template_id | int(11) | YES |  | NULL |  |  |
| oapp_date_number | int(11) | YES |  | NULL |  |  |
| oapp_note | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | oapp_template_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
