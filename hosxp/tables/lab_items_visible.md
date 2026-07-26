# `lab_items_visible`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_code | int(11) | NO | PRI | 0 |  |  |
| groupname | varchar(250) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_lab_items_code_groupname | groupname | no | 1 |
| ix_lab_items_code_groupname | lab_items_code | no | 2 |
| lab_items_code | lab_items_code | no | 1 |
| PRIMARY | lab_items_code | yes | 1 |
| PRIMARY | groupname | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
