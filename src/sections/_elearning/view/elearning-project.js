'use client';

import { useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import { _mock, _socials, _courses } from 'src/_mock';

import Iconify from 'src/components/iconify';
import { SplashScreen } from 'src/components/loading-screen';

import Advertisement from '../../advertisement';
import ElearningNewsletter from '../elearning-newsletter';
import ReviewElearning from '../../review/elearning/review-elearning';
import ElearningCourseListSimilar from '../list/elearning-course-list-similar';
import ElearningCourseDetailsHero from '../details/elearning-course-details-hero';
import ElearningCourseDetailsInfo from '../details/elearning-course-details-info';
import ElearningCourseDetailsSummary from '../details/elearning-course-details-summary';
import ElearningCourseDetailsTeachersInfo from '../details/elearning-course-details-teachers-info';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { alpha, useTheme } from '@mui/material/styles';

import { bgGradient } from 'src/theme/css';
import { _productsCarousel } from 'src/_mock';

import Carousel, { useCarousel, CarouselDots } from 'src/components/carousel';

import EcommerceProductItemHero from '../product/item/ecommerce-product-item-hero';
// ----------------------------------------------------------------------

export default function ElearningLandingView() {
  return (
    <>
      <EcommerceLandingHero/>

      
    </>
  );
}
