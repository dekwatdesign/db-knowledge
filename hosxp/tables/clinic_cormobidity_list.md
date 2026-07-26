# `clinic_cormobidity_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| clinic | char(3) | NO | PRI |  |  |  |
| cormobidity | tinyint(4) | NO | PRI | 0 |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| begin_date | date | YES |  | NULL |  |  |
| update_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| clinic | clinic | no | 1 |
| hn | hn | no | 1 |
| hn_clinic_cormobidity_unique | hn | yes | 1 |
| hn_clinic_cormobidity_unique | clinic | yes | 2 |
| hn_clinic_cormobidity_unique | cormobidity | yes | 3 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinic | yes | 1 |
| PRIMARY | cormobidity | yes | 2 |
| PRIMARY | hn | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
