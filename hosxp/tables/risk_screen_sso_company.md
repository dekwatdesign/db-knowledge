# `risk_screen_sso_company`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| company_ac | varchar(12) | YES |  | NULL |  |  |
| company_br | varchar(8) | NO | PRI |  |  |  |
| company_am | varchar(5) | YES |  | NULL |  |  |
| company_na | varchar(100) | NO | PRI |  |  |  |
| company_pr | char(2) | NO | PRI |  |  |  |
| company_re | varchar(24) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | company_br | yes | 1 |
| PRIMARY | company_na | yes | 2 |
| PRIMARY | company_pr | yes | 3 |
| PRIMARY | company_re | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
