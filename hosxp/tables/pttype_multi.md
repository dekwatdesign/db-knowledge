# `pttype_multi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| second_pttype | char(2) | YES |  | NULL |  |  |
| second_pttype_no | varchar(100) | YES |  | NULL |  |  |
| second_pttype_expire | date | YES |  | NULL |  |  |
| second_pttype_hospmain | varchar(5) | YES |  | NULL |  |  |
| second_pttype_hospsub | varchar(5) | YES |  | NULL |  |  |
| second_pttype_note | varchar(250) | YES |  | NULL |  |  |
| other_pttype | char(2) | YES |  | NULL |  |  |
| other_pttype_no | varchar(100) | YES |  | NULL |  |  |
| other_pttype_expire | date | YES |  | NULL |  |  |
| other_pttype_hospmain | varchar(5) | YES |  | NULL |  |  |
| other_pttype_hospsub | varchar(5) | YES |  | NULL |  |  |
| other_pttype_note | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
