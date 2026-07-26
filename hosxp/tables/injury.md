# `injury`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | YES |  | NULL |  |  |
| pname | varchar(15) | YES |  | NULL |  |  |
| fname | varchar(25) | YES |  | NULL |  |  |
| lname | varchar(25) | YES |  | NULL |  |  |
| addr | varchar(50) | YES |  | NULL |  |  |
| tmbpart | char(2) | YES |  | NULL |  |  |
| amppart | char(2) | YES |  | NULL |  |  |
| chwpart | char(2) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| birthday | date | YES |  | NULL |  |  |
| age | int(11) | YES |  | NULL |  |  |
| demo_note | text | YES |  | NULL |  |  |
| inj_date | date | YES |  | NULL |  |  |
| inj_time | time | YES |  | NULL |  |  |
| inj_location | varchar(50) | YES |  | NULL |  |  |
| inj_mechanism | char(1) | YES |  | NULL |  |  |
| inj_e_code | varchar(6) | YES |  | NULL |  |  |
| inj_note | text | YES |  | NULL |  |  |
| pulse1 | int(11) | YES |  | NULL |  |  |
| pulse2 | int(11) | YES |  | NULL |  |  |
| resp1 | int(11) | YES |  | NULL |  |  |
| resp2 | int(11) | YES |  | NULL |  |  |
| sysbp1 | int(11) | YES |  | NULL |  |  |
| sysbp2 | int(11) | YES |  | NULL |  |  |
| eye1 | int(11) | YES |  | NULL |  |  |
| eye2 | int(11) | YES |  | NULL |  |  |
| vorbal1 | int(11) | YES |  | NULL |  |  |
| vorbal2 | int(11) | YES |  | NULL |  |  |
| motor1 | int(11) | YES |  | NULL |  |  |
| motor2 | int(11) | YES |  | NULL |  |  |
| gcs1 | double(22,3) | YES |  | NULL |  |  |
| gcs2 | double(22,3) | YES |  | NULL |  |  |
| rts1 | double(22,3) | YES |  | NULL |  |  |
| rts2 | double(22,3) | YES |  | NULL |  |  |
| drug1 | text | YES |  | NULL |  |  |
| drug2 | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
