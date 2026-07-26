# `forensic_cfm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_cfm_id | int(11) | NO | PRI | 0 |  |  |
| forensic_cfm_no | varchar(25) | YES |  | NULL |  |  |
| officer_pname | varchar(15) | YES |  | NULL |  |  |
| officer_fname | varchar(50) | YES |  | NULL |  |  |
| officer_lname | varchar(50) | YES |  | NULL |  |  |
| forensic_police_org_code | varchar(5) | YES |  | NULL |  |  |
| forensic_death_id | int(11) | YES |  | NULL |  |  |
| police_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | forensic_cfm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
