# `prscrpt_delivery_med_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| prscrpt_delivery_med_list_id | int(11) | NO | PRI | 0 |  |  |
| prscrpt_delivery_med_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | prscrpt_delivery_med_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "prscrpt_delivery_med_list_id": 1,
    "prscrpt_delivery_med_id": 2,
    "hos_guid": "{F1C824D7-A73D-47A9-86CB-7BD0E67E7C5B}"
  },
  {
    "prscrpt_delivery_med_list_id": 2,
    "prscrpt_delivery_med_id": 2,
    "hos_guid": "{1927D157-A419-40CE-8961-CB270A20E4E8}"
  },
  {
    "prscrpt_delivery_med_list_id": 3,
    "prscrpt_delivery_med_id": 3,
    "hos_guid": "{2F66B6E7-D7CD-4D80-90CF-738438AB753D}"
  },
  {
    "prscrpt_delivery_med_list_id": 4,
    "prscrpt_delivery_med_id": 3,
    "hos_guid": "{CCF33256-294A-4685-A404-C1AF3C474CDF}"
  },
  {
    "prscrpt_delivery_med_list_id": 5,
    "prscrpt_delivery_med_id": 5,
    "hos_guid": "{D0B50F7B-74BF-47FD-BC12-0DAAF256EDE7}"
  },
  {
    "prscrpt_delivery_med_list_id": 6,
    "prscrpt_delivery_med_id": 5,
    "hos_guid": "{71C8B1E5-3D38-41DF-B722-3E42818F8A78}"
  },
  {
    "prscrpt_delivery_med_list_id": 7,
    "prscrpt_delivery_med_id": 6,
    "hos_guid": "{88E6BBF4-D83E-4473-BE1C-B796C8DA23D4}"
  },
  {
    "prscrpt_delivery_med_list_id": 8,
    "prscrpt_delivery_med_id": 6,
    "hos_guid": "{44666995-0A02-4E41-8406-CD942C0696A4}"
  }
]
```
