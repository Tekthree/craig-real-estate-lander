'use client';

import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@relume_io/relume-ui';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@relume_io/relume-ui';
import { BiDotsHorizontal } from 'react-icons/bi';

// Generate the table data
const generateTableData = () => {
  // Your original CSV data - keep all your properties here
  const data = [
    {
      address: '3560 N Columbine Street',
      city: 'Denver',
      state: 'CO',
      zip: '80205',
      sold_date: '2/18/2025',
      closing_price: '$650000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/fd88ef18d0326536875285dd7892b169-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/3560-N-Columbine-St-Denver-CO-80205/13303334_zpid/',
    },
    {
      address: '6793 Larsh Drive',
      city: 'Denver',
      state: 'CO',
      zip: '80221',
      sold_date: '2/3/2025',
      closing_price: '$750000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/7df3190581ae62274eaf9f6353f8837d-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/6793-Larsh-Dr-Denver-CO-80221/121151069_zpid/',
    },
    {
      address: '6576 S Teller Court',
      city: 'Littleton',
      state: 'CO',
      zip: '80123',
      sold_date: '1/16/2025',
      closing_price: '$740000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/9e55491ac9dd467ba4297fab366a6ac6-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/6576-S-Teller-Ct-Littleton-CO-80123/13822069_zpid/',
    },
    {
      address: '13288 E Asbury Drive',
      city: 'Aurora',
      state: 'CO',
      zip: '80014',
      sold_date: '12/17/2024',
      closing_price: '$343750',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/a62531587a3ba36c20e27dae59bf194b-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/13288-E-Asbury-Dr-Aurora-CO-80014/13050199_zpid/',
    },
    {
      address: '2129 N Clay Street',
      city: 'Denver',
      state: 'CO',
      zip: '80211',
      sold_date: '12/2/2024',
      closing_price: '$850000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/b8c5af06f7ff3e3d4b4dae73625cb3bf-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/2129-N-Clay-St-Denver-CO-80211/124225730_zpid/',
    },
    {
      address: '1445 Osceola Street',
      city: 'Denver',
      state: 'CO',
      zip: '80204',
      sold_date: '11/22/2024',
      closing_price: '$725000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/c7b4bb337f69858d1ad89f6bb67598c0-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1445-Osceola-St-Denver-CO-80204/130246196_zpid/',
    },
    {
      address: '3738 N Eliot Street Unit 11',
      city: 'Denver',
      state: 'CO',
      zip: '80211',
      sold_date: '11/15/2024',
      closing_price: '$487000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/e63e6b650e17e3d9a44bbc808ef63de5-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/3738-N-Eliot-St-11-Denver-CO-80211/440717314_zpid/',
    },
    {
      address: '2700 Xavier Street',
      city: 'Denver',
      state: 'CO',
      zip: '80212',
      sold_date: '11/13/2024',
      closing_price: '$765000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/7cb11b63644c46caaa88f12d84da79fb-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/2700-Xavier-St-Denver-CO-80212/58684835_zpid/',
    },
    {
      address: '10400 W 23rd Avenue',
      city: 'Lakewood',
      state: 'CO',
      zip: '80215',
      sold_date: '11/8/2024',
      closing_price: '$615000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/140e82964817561686ac129d0bcfb97c-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/10400-W-23rd-Ave-Lakewood-CO-80215/13745445_zpid/',
    },
    {
      address: '6160 Hoyt Street',
      city: 'Arvada',
      state: 'CO',
      zip: '80004',
      sold_date: '11/1/2024',
      closing_price: '$567000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/7eea6c53465411e975ae3b8bfd996e4a-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/6160-Hoyt-St-Arvada-CO-80004/13725968_zpid/',
    },
    {
      address: '1870 S Tejon Street',
      city: 'Denver',
      state: 'CO',
      zip: '80223',
      sold_date: '10/9/2024',
      closing_price: '$441000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/23baf12d42ed2d7ebab9390f1567588e-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1870-S-Tejon-St-Denver-CO-80223/13368232_zpid/',
    },
    {
      address: '4436 Tennyson Street Unit 2',
      city: 'Denver',
      state: 'CO',
      zip: '80212',
      sold_date: '10/4/2024',
      closing_price: '$500000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/6741ef230b78bb192c0011fd8e095d6b-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/4436-Tennyson-St-UNIT-2-Denver-CO-80212/2080941837_zpid/',
    },
    {
      address: '8338 Quay Drive',
      city: 'Arvada',
      state: 'CO',
      zip: '80003',
      sold_date: '9/20/2024',
      closing_price: '$610000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/d35f4383855929be7d8d8d18d7bdd2e2-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/8338-Quay-Dr-Arvada-CO-80003/13694749_zpid/',
    },
    {
      address: '3095 S Marion Street',
      city: 'Englewood',
      state: 'CO',
      zip: '80113',
      sold_date: '8/12/2024',
      closing_price: '$650000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/4d047c10811c66ec08848c5eb1c0561f-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/3095-S-Marion-St-Englewood-CO-80113/13030601_zpid/',
    },
    {
      address: '10617 Ura Lane',
      city: 'Northglenn',
      state: 'CO',
      zip: '80234',
      sold_date: '7/31/2024',
      closing_price: '$600000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/100d7c5e2f9c0d7e8942f60b915e67ee-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/10617-Ura-Ln-Northglenn-CO-80234/12967883_zpid/',
    },
    {
      address: '3579 Grape Street',
      city: 'Denver',
      state: 'CO',
      zip: '80207',
      sold_date: '7/11/2024',
      closing_price: '$648000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/784bc88b21d1e17ad20f119be1164e3d-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/3579-Grape-St-Denver-CO-80207/444069210_zpid/',
    },
    {
      address: '1442 Adams Street',
      city: 'Denver',
      state: 'CO',
      zip: '80206',
      sold_date: '6/10/2024',
      closing_price: '$760000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/afd7c5ee30a3df2260c07e388fa25a22-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1442-Adams-St-Denver-CO-80206/13325159_zpid/',
    },
    {
      address: '468 S Pennsylvania Street',
      city: 'Denver',
      state: 'CO',
      zip: '80209',
      sold_date: '5/9/2024',
      closing_price: '$1415000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/427bc7cf0be54ab218c9d6b65acc5fdb-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/468-S-Pennsylvania-St-Denver-CO-80209/13355551_zpid/',
    },
    {
      address: '4249 S Granby Way Unit B',
      city: 'Aurora',
      state: 'CO',
      zip: '80014',
      sold_date: '5/2/2024',
      closing_price: '$425000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/c699439e73c246ceea710c4c88b89ba5-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/4249-S-Granby-Way-APT-B-Aurora-CO-80014/13102316_zpid/',
    },
    {
      address: '3219 E 99th Way',
      city: 'Thornton',
      state: 'CO',
      zip: '80229',
      sold_date: '4/24/2024',
      closing_price: '$500000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/dfdf16245a5ab42bd3f9ee73c70cbc86-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/3219-E-99th-Way-Thornton-CO-80229/12972839_zpid/',
    },
    {
      address: '9922 W 66th Place',
      city: 'Arvada',
      state: 'CO',
      zip: '80004',
      sold_date: '4/3/2024',
      closing_price: '$745000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/fa3c72143ad226b8bdc378cc4c042ddf-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/9922-W-66th-Pl-Arvada-CO-80004/13716306_zpid/',
    },
    {
      address: '7946 Cyd Drive',
      city: 'Denver',
      state: 'CO',
      zip: '80221',
      sold_date: '3/26/2024',
      closing_price: '$562000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/b393be4ef920442826b12f0c31b4ed00-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/7946-Cyd-Dr-Denver-CO-80221/12997908_zpid/',
    },
    {
      address: '12364 W 61st Avenue',
      city: 'Arvada',
      state: 'CO',
      zip: '80004',
      sold_date: '3/26/2024',
      closing_price: '$660000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/5290e42404198f4c028a00343c1e8c52-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/12364-W-61st-Ave-Arvada-CO-80004/13722551_zpid/',
    },
    {
      address: '1243 Washington Street Unit 101',
      city: 'Denver',
      state: 'CO',
      zip: '80203',
      sold_date: '2/16/2024',
      closing_price: '$290000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/aaac907504be5a600d67ba9d0e9044f2-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1243-N-Washington-St-APT-101-Denver-CO-80203/13332112_zpid/',
    },
    {
      address: '2707 E 33rd Avenue',
      city: 'Denver',
      state: 'CO',
      zip: '80205',
      sold_date: '1/30/2024',
      closing_price: '$545000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/fb89fd8467c49af14bacc17647f2a1cd-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/2707-E-33rd-Ave-Denver-CO-80205/13303484_zpid/',
    },
    {
      address: '2508 Glenarm Place',
      city: 'Denver',
      state: 'CO',
      zip: '80205',
      sold_date: '1/16/2024',
      closing_price: '$705000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/f20b8141fcb64b0483242dd815d7dc06-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/2508-Glenarm-Pl-Denver-CO-80205/13318364_zpid/',
    },
    {
      address: '6767 Ames Street',
      city: 'Arvada',
      state: 'CO',
      zip: '80003',
      sold_date: '11/21/2023',
      closing_price: '$819000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/3bd05971465dc0b0618d725910ed6ef9-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/6767-Ames-St-Arvada-CO-80003/13713936_zpid/',
    },
    {
      address: '2929 W Floyd Avenue Unit 316',
      city: 'Denver',
      state: 'CO',
      zip: '80236',
      sold_date: '11/16/2023',
      closing_price: '$237500',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/8b7f8a5acbf270ae63f74f11c641a82f-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/2929-W-Floyd-Ave-APT-316-Denver-CO-80236/13386439_zpid/',
    },
    {
      address: '17455 Hop Clover Avenue',
      city: 'Parker',
      state: 'CO',
      zip: '80134',
      sold_date: '10/13/2023',
      closing_price: '$622740',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/e85cd6773aa25ed66097020a5c1697c3-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/17455-Hop-Clover-Ave-Parker-CO-80134/300012680_zpid/',
    },
    {
      address: '50 Clarkson Street Unit 304',
      city: 'Denver',
      state: 'CO',
      zip: '80218',
      sold_date: '10/11/2023',
      closing_price: '$198470',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/13e135fc7327c9b074947bbea5e2058d-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/50-N-Clarkson-St-APT-304-Denver-CO-80218/58686275_zpid/',
    },
    {
      address: '8464 W 66th Circle',
      city: 'Arvada',
      state: 'CO',
      zip: '80004',
      sold_date: '9/28/2023',
      closing_price: '$960000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/a39d7a58d1dffd64e16c1a20b8b3f803-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/8464-W-66th-Cir-Arvada-CO-80004/13716600_zpid/',
    },
    {
      address: '9045 S Shawnee Court',
      city: 'Aurora',
      state: 'CO',
      zip: '80016',
      sold_date: '9/19/2023',
      closing_price: '$799354',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/938082f81f7a339cb92eb8958a47d508-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/9045-S-Shawnee-Ct-Aurora-CO-80016/331684438_zpid/',
    },
    {
      address: '1930 Hooker Street Unit 6',
      city: 'Denver',
      state: 'CO',
      zip: '80204',
      sold_date: '9/18/2023',
      closing_price: '$655000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/26f321ee073c0e0dc76952eab4b9c7d3-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1930-Hooker-St-6-Denver-CO-80204/2056023595_zpid/',
    },
    {
      address: '604 W 174th Place',
      city: 'Broomfield',
      state: 'CO',
      zip: '80023',
      sold_date: '8/31/2023',
      closing_price: '$630000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/7ff131957dab3f44ca8b0872f29904ef-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/604-W-174th-Pl-Broomfield-CO-80023/249283610_zpid/',
    },
    {
      address: '1251 S Monaco Pkwy',
      city: 'Denver',
      state: 'CO',
      zip: '80224',
      sold_date: '8/17/2023',
      closing_price: '$367000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/f23e49f4a101db393fa8cc1810f9985f-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1251-S-Monaco-Pkwy-Denver-CO-80224/2056553896_zpid/',
    },
    {
      address: '660 N Meade Street',
      city: 'Denver',
      state: 'CO',
      zip: '80204',
      sold_date: '7/7/2023',
      closing_price: '$489000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/f0c9cbf73e6dd5b6fb687010eda06b08-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/660-N-Meade-St-Denver-CO-80204/13337449_zpid/',
    },
    {
      address: '1161 S University Boulevard',
      city: 'Denver',
      state: 'CO',
      zip: '80210',
      sold_date: '6/14/2023',
      closing_price: '$824000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/0bb6ce12b5b85e721580becaf4aafb8f-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1161-S-University-Blvd-Denver-CO-80210/13370118_zpid/',
    },
    {
      address: '610 Hayloft Way',
      city: 'Brighton',
      state: 'CO',
      zip: '80601',
      sold_date: '6/12/2023',
      closing_price: '$495000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/6803dca863ca564e6b20408ed7cf7cc6-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/610-Hayloft-Way-Brighton-CO-80601/68568198_zpid/',
    },
    {
      address: '1224 Kingston Street',
      city: 'Aurora',
      state: 'CO',
      zip: '80010',
      sold_date: '6/6/2023',
      closing_price: '$390000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/d76a33605fa4f3529d3576ce9f4b5e8a-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1224-Kingston-St-Aurora-CO-80010/13034172_zpid/',
    },
    {
      address: '1941 W 35th Avenue',
      city: 'Denver',
      state: 'CO',
      zip: '80211',
      sold_date: '6/1/2023',
      closing_price: '$1425000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/e88ec7717871933dbf9b419e010e5070-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1941-W-35th-Ave-Denver-CO-80211/337664644_zpid/',
    },
    {
      address: '3908 S Yosemite Street',
      city: 'Denver',
      state: 'CO',
      zip: '80237',
      sold_date: '6/1/2023',
      closing_price: '$330000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/6f22ade8d8e2550ca05f86016f362114-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/3908-S-Yosemite-St-Denver-CO-80237/13421794_zpid/',
    },
    {
      address: '2877 Ames Street',
      city: 'Wheat Ridge',
      state: 'CO',
      zip: '80214',
      sold_date: '5/5/2023',
      closing_price: '$775000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/caac7a37191cdf78e03f1859b8b27314-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/2877-Ames-St-Wheat-Ridge-CO-80214/13738688_zpid/',
    },
    {
      address: '10772 E Exposition Avenue Unit 243',
      city: 'Aurora',
      state: 'CO',
      zip: '80012',
      sold_date: '5/3/2023',
      closing_price: '$164000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/f723478dfa9b3f76d722e9d58fc8f29c-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/10772-E-Exposition-Ave-APT-243-Aurora-CO-80012/13043596_zpid/',
    },
    {
      address: '930 Grove Street',
      city: 'Denver',
      state: 'CO',
      zip: '80204',
      sold_date: '4/21/2023',
      closing_price: '$427500',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/502ad5dcb14d7ec44ccf089a85c27e7c-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/930-Grove-St-Denver-CO-80204/13335670_zpid/',
    },
    {
      address: '4249 S Fox Street',
      city: 'Englewood',
      state: 'CO',
      zip: '80110',
      sold_date: '4/18/2023',
      closing_price: '$560000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/f4cc22cce50868a0233013b964d23e97-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/4249-S-Fox-St-Englewood-CO-80110/13143790_zpid/',
    },
    {
      address: '5935 Hanover Street',
      city: 'Denver',
      state: 'CO',
      zip: '80238',
      sold_date: '3/16/2023',
      closing_price: '$975000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/671aa51475a69fbbc309b6fc8e10f049-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/5935-Hanover-St-Denver-CO-80238/2055744673_zpid/',
    },
    {
      address: '9347 W Nova Avenue',
      city: 'Littleton',
      state: 'CO',
      zip: '80128',
      sold_date: '3/2/2023',
      closing_price: '$544000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/1a61e6efb78d0ee5ce716bbc8e811f09-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/9347-W-Nova-Ave-Littleton-CO-80128/13833186_zpid/',
    },
    {
      address: '7616 Brown Bear Court',
      city: 'Littleton',
      state: 'CO',
      zip: '80125',
      sold_date: '2/28/2023',
      closing_price: '$546260',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/c28d047035df4e910acfe957dd970a88-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/7616-Brown-Bear-Ct-Littleton-CO-80125/52461163_zpid/',
    },
    {
      address: '911 S Zeno Way UNIT 104',
      city: 'Aurora',
      state: 'CO',
      zip: '80017',
      sold_date: '2/15/2023',
      closing_price: '$270000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/e93e3c4ba03f5b7c69d483cad3387669-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/911-S-Zeno-Way-UNIT-104-Aurora-CO-80017/58889259_zpid/',
    },
    {
      address: '34 S Logan Street',
      city: 'Denver',
      state: 'CO',
      zip: '80209',
      sold_date: '1/25/2023',
      closing_price: '$815000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/2ac3d2d0c07b543731685e8452d37785-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/34-S-Logan-St-Denver-CO-80209/119692632_zpid/',
    },
    {
      address: '11855 W 52nd Avenue',
      city: 'Wheat Ridge',
      state: 'CO',
      zip: '80033',
      sold_date: '11/22/2022',
      closing_price: '$655800',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/7cc7300ca3ec4ea9fff8afa6cac928cb-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/11855-W-52nd-Ave-Wheat-Ridge-CO-80033/13731497_zpid/',
    },
    {
      address: '1224 Quince Street',
      city: 'Denver',
      state: 'CO',
      zip: '80220',
      sold_date: '11/10/2022',
      closing_price: '$475000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/20d735fb0b6c1180a4abe1d0a5872d0f-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1224-Quince-St-Denver-CO-80220/13389420_zpid/',
    },
    {
      address: '4177 S Kirk Court',
      city: 'Aurora',
      state: 'CO',
      zip: '80013',
      sold_date: '9/14/2022',
      closing_price: '$559900',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/be32fe9d7db99428462e3a07be9e6eb6-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/4177-S-Kirk-Ct-Aurora-CO-80013/13092339_zpid/',
    },
    {
      address: '4433 S Pennsylvania Street',
      city: 'Englewood',
      state: 'CO',
      zip: '80113',
      sold_date: '8/29/2022',
      closing_price: '$585000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/b801ce167301bfdc4da94f635230f9b9-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/4433-S-Pennsylvania-St-Englewood-CO-80113/13147292_zpid/',
    },
    {
      address: '15354 W 64th Lane Unit 307',
      city: 'Arvada',
      state: 'CO',
      zip: '80007',
      sold_date: '8/25/2022',
      closing_price: '$435000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/909ec8f087b5f0f7485260c965c6efb6-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/15354-W-64th-Ln-307-Arvada-CO-80007/295313966_zpid/',
    },
    {
      address: '3225 E 33rd Avenue',
      city: 'Denver',
      state: 'CO',
      zip: '80205',
      sold_date: '8/23/2022',
      closing_price: '$376500',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/85a565ae28d523c7bd0d0d9f1854fe59-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/3225-E-33rd-Ave-Denver-CO-80205/251842536_zpid/',
    },
    {
      address: '6638 Zuni Street',
      city: 'Denver',
      state: 'CO',
      zip: '80221',
      sold_date: '7/15/2022',
      closing_price: '$870000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/3b608862a518486b64c156632fa46cfa-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/6638-Zuni-St-Denver-CO-80221/295026304_zpid/',
    },
    {
      address: '888 S Reed Court Unit B',
      city: 'Lakewood',
      state: 'CO',
      zip: '80226',
      sold_date: '7/11/2022',
      closing_price: '$351675',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/a80f50d31351a3b5f898c92f6fe35c8b-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/888-S-Reed-Ct-APT-B-Lakewood-CO-80226/13771920_zpid/',
    },
    {
      address: '3534 Alcott Street',
      city: 'Denver',
      state: 'CO',
      zip: '80211',
      sold_date: '6/22/2022',
      closing_price: '$1057000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/178b26e639d5a03076dbb277d909fb20-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/3534-Alcott-St-Denver-CO-80211/444129400_zpid/',
    },
    {
      address: '4155 Zenobia Street',
      city: 'Denver',
      state: 'CO',
      zip: '80212',
      sold_date: '6/16/2022',
      closing_price: '$1615000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/459fe7702802054210dbc0220fe7afdc-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/4155-Zenobia-St-Denver-CO-80212/444062057_zpid/',
    },
    {
      address: '5754 W 61st Place',
      city: 'Arvada',
      state: 'CO',
      zip: '80003',
      sold_date: '5/27/2022',
      closing_price: '$565000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/26efff3bcd78114c29ee9e86fd2da688-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/5754-W-61st-Pl-Arvada-CO-80003/13728160_zpid/',
    },
    {
      address: '51 S Grant Street',
      city: 'Denver',
      state: 'CO',
      zip: '80209',
      sold_date: '5/18/2022',
      closing_price: '$696000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/3be66cd4cd7b1e7954bd1f217a46f502-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/51-S-Grant-St-Denver-CO-80209/13345081_zpid/',
    },
    {
      address: '6860 Zenobia Circle Unit 2',
      city: 'Westminster',
      state: 'CO',
      zip: '80030',
      sold_date: '5/16/2022',
      closing_price: '$485000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/9e6c79f477d73c3e82c0ecb5e5db854a-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/6860-Zenobia-Cir-UNIT-2-Westminster-CO-80030/13025022_zpid/',
    },
    {
      address: '4440 Jay Street Unit A',
      city: 'Wheat Ridge',
      state: 'CO',
      zip: '80033',
      sold_date: '4/27/2022',
      closing_price: '$469000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/9e22dd26f038bbee74281699bd456dc6-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/4440-Jay-St-APT-A-Wheat-Ridge-CO-80033/13736353_zpid/',
    },
    {
      address: '1210 Syracuse Street',
      city: 'Denver',
      state: 'CO',
      zip: '80220',
      sold_date: '4/25/2022',
      closing_price: '$362000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/37155c42b46c18a37cab4a48d6b7130e-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1210-Syracuse-St-Denver-CO-80220/13389362_zpid/',
    },
    {
      address: '1662 S Balsam Court',
      city: 'Lakewood',
      state: 'CO',
      zip: '80232',
      sold_date: '4/21/2022',
      closing_price: '$610000',
      represented: 'Buyer',
      image_url:
        'https://photos.zillowstatic.com/fp/3e3ad2c38bc6ddb680362168ce9e9a45-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1662-S-Balsam-Ct-Lakewood-CO-80232/13784368_zpid/',
    },
    {
      address: '13165 Elizabeth Street',
      city: 'Thornton',
      state: 'CO',
      zip: '80241',
      sold_date: '4/18/2022',
      closing_price: '$601000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/47d43a35b9864277a7f58b76add3f680-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/13165-Elizabeth-St-Thornton-CO-80241/12952613_zpid/',
    },
    {
      address: '1268 S Idalia Street',
      city: 'Aurora',
      state: 'CO',
      zip: '80017',
      sold_date: '4/15/2022',
      closing_price: '$355000',
      represented: 'Seller',
      image_url:
        'https://photos.zillowstatic.com/fp/416966c2ca77339d5f3af519653c8881-p_b.jpg',
      zillow_link:
        'https://www.zillow.com/homedetails/1268-S-Idalia-St-Aurora-CO-80017/13071190_zpid/',
    },
  ];

  return data.map((item) => ({
    name: item.address,
    email: `${item.city}, ${item.state} ${item.zip}`,
    avatar: {
      src: item.image_url,
      alt: `${item.address} property`,
    },
    createdDate: item.closing_price,
    addedDate: item.represented,
    fileSize: item.sold_date,
    link: item.zillow_link,
    actions:
      item.represented === 'Buyer'
        ? ['View Details', 'Contact Agent', 'Similar Properties']
        : ['View Details', 'Contact Agent', 'Schedule Tour'],
  }));
};

// Default values
const DEFAULT_HEADER_TITLE = 'Recent Real Estate Transactions';
const DEFAULT_HEADER_DESCRIPTION =
  'Properties sold and represented across Colorado.';
const DEFAULT_BUTTONS = [
  { children: 'Filter', variant: 'secondary', size: 'sm' },
  { children: 'View All', size: 'sm' },
];
const DEFAULT_TABLE_HEADERS = [
  'Property',
  'Location',
  'Price',
  'Role',
  'Sold Date',
  '',
];
const DEFAULT_TABLE_ROWS = generateTableData();

// Main component
export class Table9 extends React.Component {
  // Table header classes
  tableHeaderClasses = [
    'w-[302px] pr-4 xxl:w-[430px]',
    'w-[256px] pr-4 xxl:w-[256px]',
    'w-[192px] pr-4',
    'w-[192px] pr-4 xxl:w-[192px]',
    'w-[128px] pr-4',
    'w-[80px] pr-4 text-center',
  ];

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handlePrevious = () => {
    this.setState((prevState) => ({
      currentPage: Math.max(1, prevState.currentPage - 1),
    }));
  };

  handleNext = () => {
    const { tableRows = DEFAULT_TABLE_ROWS } = this.props;
    const totalPages = Math.ceil(tableRows.length / 7);

    this.setState((prevState) => ({
      currentPage: Math.min(totalPages, prevState.currentPage + 1),
    }));
  };

  render() {
    const {
      headerTitle = DEFAULT_HEADER_TITLE,
      headerDescription = DEFAULT_HEADER_DESCRIPTION,
      buttons = DEFAULT_BUTTONS,
      tableHeaders = DEFAULT_TABLE_HEADERS,
      tableRows = DEFAULT_TABLE_ROWS,
    } = this.props;

    const itemsPerPage = 7;
    const { currentPage } = this.state;

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRows = tableRows.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(tableRows.length / itemsPerPage);

    // Generate page numbers
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <section id='relume' className='px-[5%] py-16 md:py-24 lg:py-28'>
        <div className='container relative'>
          <div className='flex flex-col items-start justify-between gap-4 border border-b-0 border-border-primary p-6 sm:flex-row sm:items-center'>
            <div>
              <h1 className='mb-1 text-md font-semibold md:text-lg'>
                {headerTitle}
              </h1>
              <p>{headerDescription}</p>
            </div>
            <div className='flex gap-4'>
              {buttons.map((btn, idx) => (
                <Button
                  key={idx}
                  variant={btn.variant}
                  size={btn.size}
                  disabled={btn.disabled}
                  className={btn.className}
                  onClick={btn.onClick}>
                  {btn.children}
                </Button>
              ))}
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                {tableHeaders.map((header, idx) => (
                  <TableHead key={idx} className={this.tableHeaderClasses[idx]}>
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>

            <TableBody>
              {currentRows.map((row, rowIdx) => (
                <TableRow key={rowIdx}>
                  <TableCell className='flex-1 font-medium'>
                    <div className='grid grid-cols-[max-content_1fr] items-center gap-3'>
                      <div className='h-12 w-12 relative rounded-full overflow-hidden'>
                        <div
                          className='h-full w-full bg-cover bg-center rounded-full'
                          style={{ backgroundImage: `url(${row.avatar.src})` }}
                        />
                      </div>
                      <div>{row.name}</div>
                    </div>
                  </TableCell>

                  <TableCell className='min-w-[12rem] max-w-[16rem]'>
                    {row.email}
                  </TableCell>

                  <TableCell className='min-w-[8rem] max-w-[12rem]'>
                    {row.createdDate}
                  </TableCell>

                  <TableCell className='min-w-[8rem] max-w-[12rem]'>
                    {row.addedDate}
                  </TableCell>

                  <TableCell className='min-w-[8rem] max-w-[6rem]'>
                    {row.fileSize}
                  </TableCell>

                  <TableCell className='text-center font-semibold'>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <BiDotsHorizontal className='size-6' />
                      </DropdownMenuTrigger>

                      <DropdownMenuContent>
                        <a
                          href={row.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          style={{ textDecoration: 'none', color: 'inherit' }}>
                          <DropdownMenuItem key='view'>
                            View Details
                          </DropdownMenuItem>
                        </a>

                        {row.actions.slice(1).map((action, actionIdx) => (
                          <DropdownMenuItem key={actionIdx + 1}>
                            {action}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Pagination className='mt-10'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href='#'
                  size='sm'
                  variant='secondary'
                  onClick={(e) => {
                    e.preventDefault();
                    this.handlePrevious();
                  }}
                />
              </PaginationItem>

              <PaginationItem className='hidden md:block'>
                {pageNumbers.map((num) => (
                  <PaginationLink
                    key={num}
                    href='#'
                    size='sm'
                    variant={currentPage === num ? 'primary' : 'link'}
                    className='px-4 py-2'
                    onClick={(e) => {
                      e.preventDefault();
                      this.handlePageChange(num);
                    }}>
                    {num}
                  </PaginationLink>
                ))}
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  href='#'
                  size='sm'
                  variant='secondary'
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleNext();
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    );
  }
}
