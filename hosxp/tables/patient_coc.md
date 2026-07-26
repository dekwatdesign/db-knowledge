# `patient_coc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cid | varchar(13) | NO | PRI |  |  |  |
| pname | varchar(50) | YES |  | NULL |  |  |
| fname | varchar(150) | YES |  | NULL |  |  |
| lname | varchar(150) | YES |  | NULL |  |  |
| birth_date | date | YES |  | NULL |  |  |
| addrpart | varchar(50) | YES |  | NULL |  |  |
| moopart | varchar(25) | YES |  | NULL |  |  |
| road | varchar(100) | YES |  | NULL |  |  |
| soi | varchar(100) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| po_code | varchar(5) | YES |  | NULL |  |  |
| home_phone | varchar(100) | YES |  | NULL |  |  |
| mobile_phone | varchar(100) | YES |  | NULL |  |  |
| work_phone | varchar(100) | YES |  | NULL |  |  |
| occupation | char(3) | YES |  | NULL |  |  |
| found_allergy | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | cid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
