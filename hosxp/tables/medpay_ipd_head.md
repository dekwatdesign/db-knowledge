# `medpay_ipd_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_rx_number | int(11) | NO | PRI | 0 |  |  |
| ipt_medication_type | int(11) | YES |  | NULL |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| rxdate | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | med_rx_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "med_rx_number": 1821,
    "ipt_medication_type": null,
    "an": "540000786",
    "rxdate": "2011-10-12",
    "hos_guid": null
  },
  {
    "med_rx_number": 1823,
    "ipt_medication_type": null,
    "an": "540000787",
    "rxdate": "2011-10-10",
    "hos_guid": null
  },
  {
    "med_rx_number": 1824,
    "ipt_medication_type": null,
    "an": "540000788",
    "rxdate": "2011-10-11",
    "hos_guid": null
  },
  {
    "med_rx_number": 1831,
    "ipt_medication_type": null,
    "an": "540000794",
    "rxdate": "2011-10-13",
    "hos_guid": null
  },
  {
    "med_rx_number": 1832,
    "ipt_medication_type": null,
    "an": "540000794",
    "rxdate": "2011-10-13",
    "hos_guid": null
  },
  {
    "med_rx_number": 1836,
    "ipt_medication_type": null,
    "an": "540000786",
    "rxdate": "2011-10-10",
    "hos_guid": null
  },
  {
    "med_rx_number": 1839,
    "ipt_medication_type": null,
    "an": "540000786",
    "rxdate": "2011-10-11",
    "hos_guid": null
  },
  {
    "med_rx_number": 1841,
    "ipt_medication_type": null,
    "an": "540000801",
    "rxdate": "2011-10-11",
    "hos_guid": null
  }
]
```
