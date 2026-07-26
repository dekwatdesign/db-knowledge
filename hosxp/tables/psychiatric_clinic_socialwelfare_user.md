# `psychiatric_clinic_socialwelfare_user`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_clinic_socialwelfare_user_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_clinic_socialwelfare_user_loginname | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_clinic_socialwelfare_user_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "psychiatric_clinic_socialwelfare_user_id": 1,
    "psychiatric_clinic_socialwelfare_user_loginname": "yuwa020",
    "hos_guid": null
  },
  {
    "psychiatric_clinic_socialwelfare_user_id": 2,
    "psychiatric_clinic_socialwelfare_user_loginname": "yuwa125",
    "hos_guid": null
  },
  {
    "psychiatric_clinic_socialwelfare_user_id": 3,
    "psychiatric_clinic_socialwelfare_user_loginname": "yuwa021",
    "hos_guid": null
  },
  {
    "psychiatric_clinic_socialwelfare_user_id": 4,
    "psychiatric_clinic_socialwelfare_user_loginname": "yuwa166",
    "hos_guid": null
  },
  {
    "psychiatric_clinic_socialwelfare_user_id": 5,
    "psychiatric_clinic_socialwelfare_user_loginname": "yuwa182",
    "hos_guid": null
  }
]
```
